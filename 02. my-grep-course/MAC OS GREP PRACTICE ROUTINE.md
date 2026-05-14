**MAC OS GREP PRACTICE ROUTINE**

**WTF IS GREP**

1. GET STARTED WITH REGULAR EXPRESSIONS  
   1. **What are regular expressions?**  
      1. Regular Expression \- a set of symbols representing a text pattern  
      2. Regular Expressions \- Formal language interpreted by a regular expression processor  
      3. Used for matching, searching, and replacing text  
      4. Used by programming languages  
      5. Regex for short  
      6. Examples  
         1. Test if email is valid format  
         2. Search doc for “Bob” to replace with “Robert”  
         3. Etc.   
      7. Matches \- text and a regex match if they correctly describe each other

   2. **Choose a regular expression engine**  
      1. The regular expression processor  
         1. Most expressions will work on any engine  
         2. Might have added functionality  
         3. JavaScript is a regex engine  
         4. Most text editors are   
         5. Most languages have a regex engine  
         6. Free online tools also such as   
            1. [https://regexr.com](https://regexer.com)  
            2. [https://regex101.com](https://regex101.com)  
            3. [https://regexpal.com](https://regexpal.com)

   3. **Notation conventions and modes**  
      1. Usually inside // ie /abc/  
         1. Might not need // depending on circumstance  
      2. Flags switch to different modes:  
         1. Standard: no flags /re/   
            1. find first  
         2. Global: /re/g   
            1. find all  
         3. Case insensitive: /re/i  
            1. Regardless of case  
         4. Multiline: /re/m  
            1. Stretches across more than one line  
      3. Grep  
         1. g/re/p  
            1. Used to be that global flag at beginning  
            2. Search: Global regular expression print  
            3. Often used as a verb

               		

2. CHARACTERS  
   1. **Literal characters**  
      1. /car/ matches “car”  
      2. /car/ matches first three of “carnival”  
      3. Similar to searching a word processor  
      4. Simplest match there is  
      5. Searches are case-sensitive by default  
         1. Recommended to always write regex as case sensitive  
      6. Spaces are characters\!  
         1. /car/ does not match “c a r”  
      7. Standard (non-global matching)  
         1. The earliest (leftmost) match is always preferred  
            1. ie  /zz/ matches first set of Zs in “pizzazz”  
      8. Global matching  
         1. All matches are found throughout the text  
            1. ie  /zz/ matches both sets of Zs in “pizzazz”  
      9. /cat/ The cow, camel, and cat communicated  
         1. Searches c in first character  
         2. If match it searches a in second character  
         3. If match it searches t in third character  
            1. If no match it will backtrack and resume search for first character  
   2. Metacharacter  
      1. Character with special meaning  
      2. Transform literal characters into powerful expressions  
      3. Only a few to learn  
      4. \\ . \* \+ \- {} \[\] ^ $ | ? () : \! \=

       

3. CHARACTER SETS  
4. REPETITION METACHARACTERS  
5. GROUPING AND ALTERNATION  
6. ANCHORS  
7. CONCLUSION  
   

WHAT ARE REGEXPRESSIONS?

	Symbols representing a text pattern

