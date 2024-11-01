<?xml version="1.0" encoding="UTF-8"?><xsl:stylesheet version="1.0" exclude-result-prefixes="java" extension-element-prefixes="my-ext" xmlns:lxslt="http://xml.apache.org/xslt" xmlns:java="http://xml.apache.org/xslt/java" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:my-ext="ext1">
<xsl:import href="HTML-CCFR.xsl"/>
<xsl:output indent="no" method="xml" omit-xml-declaration="yes"/>
<xsl:template match="/">
<xsl:apply-templates select="*"/>
<xsl:apply-templates select="/output/root[position()=last()]" mode="last"/>
<br/>
</xsl:template>
<lxslt:component prefix="my-ext" functions="formatJson retrievePrizeTable">
<lxslt:script lang="javascript">
					
					var debugFeed = [];
					var debugFlag = false;
					// Format instant win JSON results.
					// @param jsonContext String JSON results to parse and display.
					// @param translation Set of Translations for the game.
					function formatJson(jsonContext, prizeNames, prizeValues, crosswordDimensions, translations)
					{
						var scenario = getScenario(jsonContext);
						var crosswordBoard = getOutcomeData(scenario, 0);
						var crosswordLetters = getOutcomeData(scenario, 1).join('');
						var convertedPrizeValues = (prizeValues.substring(1)).split('|');
						var crosswordSize = crosswordDimensions.split(",");
						//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
						// Print Translation Table to !DEBUG
						var index = 1;
						registerDebugText("Translation Table");
						while(index &lt; translations.item(0).getChildNodes().getLength())
						{
							var childNode = translations.item(0).getChildNodes().item(index);
							registerDebugText(childNode.getAttribute("key") + ": " +  childNode.getAttribute("value"));
							index += 2;
						}
						
						registerDebugText("Crossword Width: " + crosswordSize[0], translations);
						registerDebugText("Crossword Height: " + crosswordSize[1], translations);
						
						// Crossword Row output
						var width = crosswordSize[0];
						var height = crosswordSize[1];
						var CrosswordRows = [];
						var CrosswordCols = [];
						var lineStringRow = "";
						var lineStringCol = "";
						for(var x = 0; x &lt; crosswordSize[0]; ++x)
						{
							for(var y = 0; y &lt; crosswordSize[1]; ++y)
							{
								lineStringRow += crosswordBoard[y + (x * height)];
								lineStringCol += crosswordBoard[x + (y * width)];
							}
							CrosswordRows.push(lineStringRow);
							CrosswordCols.push(lineStringCol);
							lineStringRow = "";
							lineStringCol = "";
						}

						var CrosswordWords = [];						
						for(var i = 0; i &lt; CrosswordRows.length; ++i)
						{
							registerDebugText("Row " + i + ": " + CrosswordRows[i]);
							AddWords(CrosswordRows[i], CrosswordWords);
							registerDebugText("Words Found so far: " + CrosswordWords);
						}
						
						for(var i = 0; i &lt; CrosswordCols.length; ++i)
						{
							registerDebugText("Col " + i + ": " + CrosswordCols[i]);
							AddWords(CrosswordCols[i], CrosswordWords);
							registerDebugText("Words Found so far: " + CrosswordWords);
						}
						
						registerDebugText("Words: " + CrosswordWords);
						registerDebugText("Word Count: " + CrosswordWords.length);
						registerDebugText("Letters: " + crosswordLetters);
						
						var MatchedCount = 0;
						for(var word = 0; word &lt; CrosswordWords.length; ++word)
						{ 
							if(checkMatch(crosswordLetters, CrosswordWords[word]))
							{
								registerDebugText("Matched Word: " + CrosswordWords[word]);
								MatchedCount++;
							}
						}
						
						registerDebugText("Matched Words Count: " + MatchedCount);
						
						// Output winning numbers table.
						var r = [];
						r.push('&lt;table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed"&gt;');
 						
 						r.push('&lt;tr&gt;&lt;td class="tablehead"&gt;');
 						r.push(getTranslationByName("wordToMatch", translations));
 						r.push('&lt;/td&gt;&lt;/tr&gt;');
 						
 						for(var word = 0; word &lt; CrosswordWords.length; ++word)
 						{
 							r.push('&lt;tr&gt;');
 							var wordString = "";
 							if(checkMatch(crosswordLetters, CrosswordWords[word]))
 							{
 								wordString += getTranslationByName("youMatched", translations) + ": ";
 							}
 							wordString += CrosswordWords[word];
 							
 							r.push('&lt;td class="tablebody" width="100%"&gt;');
 							r.push(wordString);
 							r.push('&lt;/td&gt;');
 							r.push('&lt;/tr&gt;');
						}
						r.push('&lt;/table&gt;');					
						
 						
 						r.push('&lt;table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed"&gt;');
 						r.push('&lt;tr&gt;&lt;td class="tablehead" colspan="' + crosswordLetters.length + '"&gt;');
 						r.push(getTranslationByName("drawnLetters", translations));
 						r.push('&lt;/td&gt;&lt;/tr&gt;');
 						r.push('&lt;tr&gt;');
 						for(var letter = 0; letter &lt; crosswordLetters.length; ++letter)
 						{
 							r.push('&lt;td class="tablebody"&gt;');
 							r.push(crosswordLetters[letter]);
 							r.push('&lt;/td&gt;');
						}
						r.push('&lt;/tr&gt;');
						r.push('&lt;/table&gt;');
						
						////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						// !DEBUG OUTPUT TABLE
						if(debugFlag)
						{
							// DEBUG TABLE
							//////////////////////////////////////
							r.push('&lt;table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed"&gt;');
							for(var idx = 0; idx &lt; debugFeed.length; ++idx)
							{
								if(debugFeed[idx] == "")
									continue;
								r.push('&lt;tr&gt;');
								r.push('&lt;td class="tablebody"&gt;');
								r.push(debugFeed[idx]);
								r.push('&lt;/td&gt;');
								r.push('&lt;/tr&gt;');
							}
							r.push('&lt;/table&gt;');
						}
						return r.join('');
					}
					
					// Input: A list of Price Points and the available Prize Structures for the game as well as the wagered price point
					// Output: A string of the specific prize structure for the wagered price point
					function retrievePrizeTable(pricePoints, prizeStructures, wageredPricePoint)
					{
						var pricePointList = pricePoints.split(",");
						var prizeStructStrings = prizeStructures.split("|");
						
						
						for(var i = 0; i &lt; pricePoints.length; ++i)
						{
							if(wageredPricePoint == pricePointList[i])
							{
								return prizeStructStrings[i];
							}
						}
						
						return "";
					}

					// Input: Json document string containing 'scenario' at root level.
					// Output: Scenario value.
					function getScenario(jsonContext)
					{
						// Parse json and retrieve scenario string.
						var jsObj = JSON.parse(jsonContext);
						var scenario = jsObj.scenario;

						// Trim null from scenario string.
						scenario = scenario.replace(/\0/g, '');

						return scenario;
					}
					
					// Input: Json document string containing 'amount' at root level.
					// Output: Price Point value.
					function getPricePoint(jsonContext)
					{
						// Parse json and retrieve price point amount
						var jsObj = JSON.parse(jsonContext);
						var pricePoint = jsObj.amount;

						return pricePoint;
					}

					// Input: "-SWAN-LOYAL--I-EYE-...|...SLUCBNADIFGRWJEKYH..."
					// Output: ["-", "S", "W", "A", ...] or ["S", "L", "U", "C", ...]
					function getOutcomeData(scenario, index)
					{
						var outcomeData = scenario.split("|")[index];
						var outcomePairs = outcomeData.split("");
						var result = [];
						for(var i = 0; i &lt; outcomePairs.length; ++i)
						{
							result.push(outcomePairs[i]);
						}
						return result;
					}
					
					function AddWords(checkForWords, wordsArray)
					{
						var word = "";
						var count = 0;
						for(var char = 0; char &lt; checkForWords.length; ++char)
						{
							registerDebugText("Checking for Word In: " + checkForWords);
							if(checkForWords.charAt(char) != '-')
							{
								word += checkForWords.charAt(char);
							}
							if(checkForWords.charAt(char) == '-' || char + 1 == checkForWords.length)
							{
								if(word.length &gt;= 3)
								{
									wordsArray.push(word);
									registerDebugText("Word Found: " + word);
									count++;
								}
								word = "";
								continue;
							}
						}
						registerDebugText(count + " NEW words found.");
						registerDebugText(wordsArray.length + " TOTAL words found.");
						
					}

					// Input: string of the drawn Letters
					// Output: true all letters of word are in the drawn letters, false if not
					function checkMatch(drawnLetters, word)
					{
						for(var i = 0; i &lt; word.length; ++i)
						{
							if(drawnLetters.indexOf(word[i]) &lt;= -1)
							{
								return false;
							}
						}
						
						return true;
					}
					
					////////////////////////////////////////////////////////////////////////////////////////
					function registerDebugText(debugText)
					{
						debugFeed.push(debugText);
					}
					/////////////////////////////////////////////////////////////////////////////////////////
					function getTranslationByName(keyName, translationNodeSet)
					{
						var index = 1;
						while(index &lt; translationNodeSet.item(0).getChildNodes().getLength())
						{
							var childNode = translationNodeSet.item(0).getChildNodes().item(index);
							
							if(childNode.getAttribute("key") == keyName)
							{
								return childNode.getAttribute("value");
							}
							
							index += 2;
						}
					}
					
				</lxslt:script>
</lxslt:component>
<xsl:template match="root" mode="last">
<table border="0" cellpadding="1" cellspacing="1" width="100%" class="gameDetailsTable">
<tr>
<td valign="top" class="subheader">
<xsl:value-of select="//translation/phrase[@key='totalWager']/@value"/>
<xsl:value-of select="': '"/>
<xsl:call-template name="Utils.ApplyConversionByLocale">
<xsl:with-param name="multi" select="/output/denom/percredit"/>
<xsl:with-param name="value" select="//ResultData/WagerOutcome[@name='Game.Total']/@amount"/>
<xsl:with-param name="code" select="/output/denom/currencycode"/>
<xsl:with-param name="locale" select="//translation/@language"/>
</xsl:call-template>
</td>
</tr>
<tr>
<td valign="top" class="subheader">
<xsl:value-of select="//translation/phrase[@key='totalWins']/@value"/>
<xsl:value-of select="': '"/>
<xsl:call-template name="Utils.ApplyConversionByLocale">
<xsl:with-param name="multi" select="/output/denom/percredit"/>
<xsl:with-param name="value" select="SignedData/Data/Outcome/OutcomeDetail/Payout"/>
<xsl:with-param name="code" select="/output/denom/currencycode"/>
<xsl:with-param name="locale" select="//translation/@language"/>
</xsl:call-template>
</td>
</tr>
</table>
</xsl:template>
<xsl:template match="//Outcome">
<xsl:if test="OutcomeDetail/Stage = 'Wager'">
<xsl:call-template name="Wager.Detail"/>
</xsl:if>
<xsl:if test="OutcomeDetail/NextStage = 'Wager'">
<xsl:call-template name="LastEvaluation.Detail"/>
</xsl:if>
</xsl:template>
<xsl:template name="Wager.Detail">
<table border="0" cellpadding="0" cellspacing="0" width="100%" class="gameDetailsTable">
<tr>
<td class="tablebold" background="">
<xsl:value-of select="//translation/phrase[@key='transactionId']/@value"/>
<xsl:value-of select="': '"/>
<xsl:value-of select="OutcomeDetail/RngTxnId"/>
</td>
</tr>
</table>
</xsl:template>
<xsl:template name="LastEvaluation.Detail">
<xsl:variable name="odeResponseJson" select="string(//ResultData/JSONOutcome[@name='ODEResponse']/text())"/>
<xsl:variable name="translations" select="lxslt:nodeset(//translation/)"/>
<xsl:variable name="wageredPricePoint" select="string(//ResultData/WagerOutcome[@name='Game.Total']/@amount)"/>
<xsl:variable name="prizeNames">15,14,13,12,11,10,9,8</xsl:variable>
<xsl:variable name="pricePoints">200,300,500</xsl:variable>
<xsl:variable name="prizeValuesAllPricePoints">1000000,50000,10000,5000,1500,1000,500,200|2500000,100000,20000,5000,1500,1000,500,300|5000000,250000,50000,7500,3000,1500,1000,500</xsl:variable>
<xsl:variable name="crosswordDimensions">11,11</xsl:variable>
<xsl:variable name="prizeTable">
<xsl:value-of select="my-ext:retrievePrizeTable($pricePoints, $prizeValuesAllPricePoints, $wageredPricePoint)"/>
</xsl:variable>
<xsl:variable name="convertedPrizeValues">
<xsl:call-template name="split">
<xsl:with-param name="pText" select="string($prizeTable)"/>
</xsl:call-template>
</xsl:variable>
<xsl:value-of select="my-ext:formatJson($odeResponseJson, $prizeNames, string($convertedPrizeValues), $crosswordDimensions, $translations)" disable-output-escaping="yes"/>
</xsl:template>
<xsl:template name="split">
<xsl:param name="pText"/>
<xsl:if test="string-length($pText)">
<xsl:text>|</xsl:text>
<xsl:call-template name="Utils.ApplyConversionByLocale">
<xsl:with-param name="multi" select="/output/denom/percredit"/>
<xsl:with-param name="value" select="substring-before(concat($pText,','),',')"/>
<xsl:with-param name="code" select="/output/denom/currencycode"/>
<xsl:with-param name="locale" select="//translation/@language"/>
</xsl:call-template>
<xsl:call-template name="split">
<xsl:with-param name="pText" select="substring-after($pText,',')"/>
</xsl:call-template>
</xsl:if>
</xsl:template>
<xsl:template match="text()"/>
</xsl:stylesheet>
