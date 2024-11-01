<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:x="anything">
	<xsl:namespace-alias stylesheet-prefix="x" result-prefix="xsl" />
	<xsl:output encoding="UTF-8" indent="yes" method="xml" />
	<xsl:include href="../utils.xsl" />
	<xsl:variable name="prizeNamesString">
		<xsl:value-of select="//GHSTCrosswordMappings/PrizeNames/@prizes" />
	</xsl:variable>

	<xsl:variable name="pricePointsString">
		<xsl:value-of select="//GHSTCrosswordMappings/PricePoints/@pricePoints" />
	</xsl:variable>

	<xsl:variable name="prizeTableString">
		<xsl:value-of select="//GHSTCrosswordMappings/PrizeTables/@prizeValues" />
	</xsl:variable>
	
	<xsl:variable name="crosswordBoardString">
		<xsl:value-of select="//GHSTCrosswordMappings/CrosswordBoard/@width" />
		<xsl:text>,</xsl:text>
		<xsl:value-of select="//GHSTCrosswordMappings/CrosswordBoard/@height" />
	</xsl:variable>
	<xsl:template match="/Paytable">
		<x:stylesheet version="1.0" xmlns:java="http://xml.apache.org/xslt/java" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
			exclude-result-prefixes="java" xmlns:lxslt="http://xml.apache.org/xslt" xmlns:my-ext="ext1" extension-element-prefixes="my-ext">
			<x:import href="HTML-CCFR.xsl" />
			<x:output indent="no" method="xml" omit-xml-declaration="yes" />

			<!-- TEMPLATE Match: -->
			<x:template match="/">
				<x:apply-templates select="*" />
				<x:apply-templates select="/output/root[position()=last()]" mode="last" />
				<br />
			</x:template>

			<!--The component and its script are in the lxslt namespace and define the implementation of the extension. -->
			<lxslt:component prefix="my-ext" functions="formatJson retrievePrizeTable">
				<lxslt:script lang="javascript">
					<![CDATA[
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
						while(index < translations.item(0).getChildNodes().getLength())
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
						for(var x = 0; x < crosswordSize[0]; ++x)
						{
							for(var y = 0; y < crosswordSize[1]; ++y)
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
						for(var i = 0; i < CrosswordRows.length; ++i)
						{
							registerDebugText("Row " + i + ": " + CrosswordRows[i]);
							AddWords(CrosswordRows[i], CrosswordWords);
							registerDebugText("Words Found so far: " + CrosswordWords);
						}
						
						for(var i = 0; i < CrosswordCols.length; ++i)
						{
							registerDebugText("Col " + i + ": " + CrosswordCols[i]);
							AddWords(CrosswordCols[i], CrosswordWords);
							registerDebugText("Words Found so far: " + CrosswordWords);
						}
						
						registerDebugText("Words: " + CrosswordWords);
						registerDebugText("Word Count: " + CrosswordWords.length);
						registerDebugText("Letters: " + crosswordLetters);
						
						var MatchedCount = 0;
						for(var word = 0; word < CrosswordWords.length; ++word)
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
						r.push('<table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed">');
 						
 						r.push('<tr><td class="tablehead">');
 						r.push(getTranslationByName("wordToMatch", translations));
 						r.push('</td></tr>');
 						
 						for(var word = 0; word < CrosswordWords.length; ++word)
 						{
 							r.push('<tr>');
 							var wordString = "";
 							if(checkMatch(crosswordLetters, CrosswordWords[word]))
 							{
 								wordString += getTranslationByName("youMatched", translations) + ": ";
 							}
 							wordString += CrosswordWords[word];
 							
 							r.push('<td class="tablebody" width="100%">');
 							r.push(wordString);
 							r.push('</td>');
 							r.push('</tr>');
						}
						r.push('</table>');					
						
 						
 						r.push('<table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed">');
 						r.push('<tr><td class="tablehead" colspan="' + crosswordLetters.length + '">');
 						r.push(getTranslationByName("drawnLetters", translations));
 						r.push('</td></tr>');
 						r.push('<tr>');
 						for(var letter = 0; letter < crosswordLetters.length; ++letter)
 						{
 							r.push('<td class="tablebody">');
 							r.push(crosswordLetters[letter]);
 							r.push('</td>');
						}
						r.push('</tr>');
						r.push('</table>');
						
						////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
						// !DEBUG OUTPUT TABLE
						if(debugFlag)
						{
							// DEBUG TABLE
							//////////////////////////////////////
							r.push('<table border="0" cellpadding="2" cellspacing="1" width="100%" class="gameDetailsTable" style="table-layout:fixed">');
							for(var idx = 0; idx < debugFeed.length; ++idx)
							{
								if(debugFeed[idx] == "")
									continue;
								r.push('<tr>');
								r.push('<td class="tablebody">');
								r.push(debugFeed[idx]);
								r.push('</td>');
								r.push('</tr>');
							}
							r.push('</table>');
						}
						return r.join('');
					}
					
					// Input: A list of Price Points and the available Prize Structures for the game as well as the wagered price point
					// Output: A string of the specific prize structure for the wagered price point
					function retrievePrizeTable(pricePoints, prizeStructures, wageredPricePoint)
					{
						var pricePointList = pricePoints.split(",");
						var prizeStructStrings = prizeStructures.split("|");
						
						
						for(var i = 0; i < pricePoints.length; ++i)
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
						for(var i = 0; i < outcomePairs.length; ++i)
						{
							result.push(outcomePairs[i]);
						}
						return result;
					}
					
					function AddWords(checkForWords, wordsArray)
					{
						var word = "";
						var count = 0;
						for(var char = 0; char < checkForWords.length; ++char)
						{
							registerDebugText("Checking for Word In: " + checkForWords);
							if(checkForWords.charAt(char) != '-')
							{
								word += checkForWords.charAt(char);
							}
							if(checkForWords.charAt(char) == '-' || char + 1 == checkForWords.length)
							{
								if(word.length >= 3)
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
						for(var i = 0; i < word.length; ++i)
						{
							if(drawnLetters.indexOf(word[i]) <= -1)
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
						while(index < translationNodeSet.item(0).getChildNodes().getLength())
						{
							var childNode = translationNodeSet.item(0).getChildNodes().item(index);
							
							if(childNode.getAttribute("key") == keyName)
							{
								return childNode.getAttribute("value");
							}
							
							index += 2;
						}
					}
					]]>
				</lxslt:script>
			</lxslt:component>

			<x:template match="root" mode="last">
				<table border="0" cellpadding="1" cellspacing="1" width="100%" class="gameDetailsTable">
					<tr>
						<td valign="top" class="subheader">
							<x:value-of select="//translation/phrase[@key='totalWager']/@value" />
							<x:value-of select="': '" />
							<x:call-template name="Utils.ApplyConversionByLocale">
								<x:with-param name="multi" select="/output/denom/percredit" />
								<x:with-param name="value" select="//ResultData/WagerOutcome[@name='Game.Total']/@amount" />
								<x:with-param name="code" select="/output/denom/currencycode" />
								<x:with-param name="locale" select="//translation/@language" />
							</x:call-template>
						</td>
					</tr>
					<tr>
						<td valign="top" class="subheader">
							<x:value-of select="//translation/phrase[@key='totalWins']/@value" />
							<x:value-of select="': '" />
							<x:call-template name="Utils.ApplyConversionByLocale">
								<x:with-param name="multi" select="/output/denom/percredit" />
								<x:with-param name="value" select="SignedData/Data/Outcome/OutcomeDetail/Payout" />
								<x:with-param name="code" select="/output/denom/currencycode" />
								<x:with-param name="locale" select="//translation/@language" />
							</x:call-template>
						</td>
					</tr>
				</table>
			</x:template>

			<!-- TEMPLATE Match: digested/game -->
			<x:template match="//Outcome">
				<x:if test="OutcomeDetail/Stage = 'Wager'">
					<x:call-template name="Wager.Detail" />
				</x:if>
				<x:if test="OutcomeDetail/NextStage = 'Wager'">
					<x:call-template name="LastEvaluation.Detail" />
				</x:if>
			</x:template>

			<!-- TEMPLATE Name: Wager.Detail (base game) -->
			<x:template name="Wager.Detail">
				<table border="0" cellpadding="0" cellspacing="0" width="100%" class="gameDetailsTable">
					<tr>
						<td class="tablebold" background="">
							<x:value-of select="//translation/phrase[@key='transactionId']/@value" />
							<x:value-of select="': '" />
							<x:value-of select="OutcomeDetail/RngTxnId" />
						</td>
					</tr>
				</table>
			</x:template>

			<!-- TEMPLATE Name: LastEvaluation.Detail (Wager in Try Mode, Reveal in Buy Mode) -->
			<x:template name="LastEvaluation.Detail">
				<x:variable name="odeResponseJson" select="string(//ResultData/JSONOutcome[@name='ODEResponse']/text())" />
				<x:variable name="translations" select="lxslt:nodeset(//translation/)" />
				<x:variable name="wageredPricePoint" select="string(//ResultData/WagerOutcome[@name='Game.Total']/@amount)" />
				<x:variable name="prizeNames">
					<xsl:value-of select="$prizeNamesString" />
				</x:variable>

				<x:variable name="pricePoints">
					<xsl:value-of select="$pricePointsString" />
				</x:variable>

				<x:variable name="prizeValuesAllPricePoints">
					<xsl:value-of select="$prizeTableString" />
				</x:variable>
				
				<x:variable name="crosswordDimensions">
					<xsl:value-of select="$crosswordBoardString" />
				</x:variable>

				<x:variable name="prizeTable">
					<x:value-of select="my-ext:retrievePrizeTable($pricePoints, $prizeValuesAllPricePoints, $wageredPricePoint)" />
				</x:variable>

				<x:variable name="convertedPrizeValues">
					<x:call-template name="split">
						<x:with-param name="pText" select="string($prizeTable)" />
					</x:call-template>
				</x:variable>

				<x:value-of
					select="my-ext:formatJson($odeResponseJson, $prizeNames, string($convertedPrizeValues), $crosswordDimensions, $translations)"
					disable-output-escaping="yes" />
			</x:template>

			<x:template name="split">
				<x:param name="pText" />
				<x:if test="string-length($pText)">
					<x:text>|</x:text>
					<x:call-template name="Utils.ApplyConversionByLocale">
						<x:with-param name="multi" select="/output/denom/percredit" />
						<x:with-param name="value" select="substring-before(concat($pText,','),',')" />
						<x:with-param name="code" select="/output/denom/currencycode" />
						<x:with-param name="locale" select="//translation/@language" />
					</x:call-template>
					<x:call-template name="split">
						<x:with-param name="pText" select="substring-after($pText,',')" />
					</x:call-template>
				</x:if>
			</x:template>
			
			<x:template match="text()" />
		</x:stylesheet>
	</xsl:template>

	<xsl:template name="TemplatesForResultXSL">
		<x:template match="@aClickCount">
			<clickcount>
				<x:value-of select="." />
			</clickcount>
		</x:template>
		<x:template match="*|@*|text()">
			<x:apply-templates />
		</x:template>
	</xsl:template>
</xsl:stylesheet>
