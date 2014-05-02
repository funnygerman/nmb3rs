function EnglishNumbers() {
    this.numberWords = {};
    this.numberWords['0']           = ['', 'zero'];
    this.numberWords['1']           = ['one'];
    this.numberWords['2']           = ['two'];
    this.numberWords['3']           = ['three'];
    this.numberWords['4']           = ['four'];
    this.numberWords['5']           = ['five'];
    this.numberWords['6']           = ['six'];
    this.numberWords['7']           = ['seven'];
    this.numberWords['8']           = ['eight'];
    this.numberWords['9']           = ['nine'];
    this.numberWords['10']          = ['ten'];
    this.numberWords['11']          = ['eleven'];
    this.numberWords['12']          = ['twelve'];
    this.numberWords['13']          = ['thirteen'];
    this.numberWords['14']          = ['fourteen'];
    this.numberWords['15']          = ['fifteen'];
    this.numberWords['16']          = ['sixteen'];
    this.numberWords['17']          = ['seventeen'];
    this.numberWords['18']          = ['eighteen'];
    this.numberWords['19']          = ['nineteen'];
    this.numberWords['20']          = ['twenty'];
    this.numberWords['30']          = ['thirty'];
    this.numberWords['40']          = ['forty'];
    this.numberWords['50']          = ['fifty'];
    this.numberWords['60']          = ['sixty'];
    this.numberWords['70']          = ['seventy'];
    this.numberWords['80']          = ['eighty'];
    this.numberWords['90']          = ['ninety'];

    this.cntWords = {};
    this.cntWords['0'] = [''];
    this.cntWords['1'] = ['thousand'];
    this.cntWords['2'] = ['million'];
    this.cntWords['3'] = ['milliard'];
    this.cntWords['4'] = ['billion'];
    this.cntWords['5'] = ['billiard'];
    this.cntWords['6'] = ['trillion'];
    this.cntWords['7'] = ['trilliard'];

    EnglishNumbers.prototype.tensToWord = function(ones, tens, cnt) {                
        if (ones == "") return "";
        
        onesAsWord = this.numberWords[ones][0];
        
        if (tens == 0) {
            tensAsWord = onesAsWord;                            
        } else if (tens == 1) {
            tensAsWord = this.numberWords[tens + ones][0];
        } else {
            tensAsWord = this.numberWords[tens * 10][0];
            
            if (ones != 0) {
                tensAsWord = tensAsWord + " " + onesAsWord;
            }
        }
        
        return tensAsWord;
    }
    
    EnglishNumbers.prototype.hundredsToWord = function(hundreds) {
        if (hundreds == "" || hundreds == 0) return "";

        hundredsAsWord = this.numberWords[hundreds][0];
        hundredsAsWord = hundredsAsWord + " hundred";
        
        return hundredsAsWord;
    }
    
    EnglishNumbers.prototype.cntToWord = function(cnt, ones, tens) {
        cntAsWord = this.cntWords[cnt][0];
        if (cnt > 0) {
            cntAsWord = cntAsWord + " ";
        }
        return cntAsWord;
    }
    
    EnglishNumbers.prototype.numberToWord = function(ones, tens, hundreds, cnt){
        tensAsWord = this.tensToWord(ones, tens, cnt);
        hundredsAsWord = this.hundredsToWord(hundreds);
        
        if (hundreds == 0) {
            numberword = tensAsWord;
        }
        else {
            if (ones == 0 && tens == 0) {
                numberword = hundredsAsWord;
            }
            else {
                numberword = hundredsAsWord + " " +tensAsWord;
            }
        }
        
        if (numberword != "") {
            cntAsWord = this.cntToWord(cnt, ones, tens);
            numberword = numberword + " " + cntAsWord;
        }

        return numberword;
    }
    
    EnglishNumbers.prototype.numberToWordFull = function(number) {
        if (number.value == "") return "";
        if (number.value == 0) return number.value[0][1];
        
        var number_length = number.value.length;
        var numberAsWord = "";
        var cnt = 0;
        var ones = "";
        var tens = "";
        var hundreds = "";
        for (var i = 1; i <= number_length; i++) {
            if (i % 3 == 1) {
                ones = number.value[number_length - i];
                if ((ones >= 0 && ones <= 9) == false || ones == " ") return "";
            } else if (i % 3 == 2) {
                tens = number.value[number_length - i];
                if ((tens >= 0 && tens <= 9) == false || tens == " ") return "";
            } else if (i % 3 == 0) {
                hundreds = number.value[number_length - i];
                if ((hundreds >= 0 && hundreds <= 9) == false || hundreds == " ") return "";
                
                numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + numberAsWord;
                ones = "";
                tens = "";
                hundreds = "";
                
                cnt++;
            }                   
        }
       
        numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + numberAsWord;
        
        return numberAsWord;
    }

}

function GermanNumbers() {
    this.numberWords = {};
    this.numberWords['0']           = ['', 'Null'];
    this.numberWords['1']           = ['eins', 'eine', 'ein'];
    this.numberWords['2']           = ['zwei'];
    this.numberWords['3']           = ['drei'];
    this.numberWords['4']           = ['vier'];
    this.numberWords['5']           = ['fünf'];
    this.numberWords['6']           = ['sechs'];
    this.numberWords['7']           = ['sieben'];
    this.numberWords['8']           = ['acht'];
    this.numberWords['9']           = ['neun'];
    this.numberWords['10']          = ['zehn'];
    this.numberWords['11']          = ['elf'];
    this.numberWords['12']          = ['zwölf'];
    this.numberWords['13']          = ['dreizehn'];
    this.numberWords['14']          = ['vierzehn'];
    this.numberWords['15']          = ['fünfzehn'];
    this.numberWords['16']          = ['sechzehn'];
    this.numberWords['17']          = ['siebzehn'];
    this.numberWords['18']          = ['achtzehn'];
    this.numberWords['19']          = ['neunzehn'];
    this.numberWords['20']          = ['zwanzig'];
    this.numberWords['30']          = ['dreißig'];
    this.numberWords['40']          = ['vierzig'];
    this.numberWords['50']          = ['fünfzig'];
    this.numberWords['60']          = ['sechzig'];
    this.numberWords['70']          = ['siebzig'];
    this.numberWords['80']          = ['achtzig'];
    this.numberWords['90']          = ['neunzig'];
    this.numberWords['100']         = ['einhundert'];
    this.numberWords['200']         = ['zweihundert'];
    this.numberWords['300']         = ['dreihundert'];
    this.numberWords['400']         = ['vierhundert'];
    this.numberWords['500']         = ['fünfhundert'];
    this.numberWords['600']         = ['sechshundert'];
    this.numberWords['700']         = ['siebenhundert'];
    this.numberWords['800']         = ['achthundert'];
    this.numberWords['900']         = ['neunhundert'];
    
    this.cntWords = {};
    this.cntWords['0'] = [''];
    this.cntWords['1'] = ['tausend'];
    this.cntWords['2'] = ['Million', 'Millionen'];
    this.cntWords['3'] = ['Milliarde', 'Milliarden'];
    this.cntWords['4'] = ['Billion', 'Billionen'];
    this.cntWords['5'] = ['Billiarde', 'Billiarden'];
    this.cntWords['6'] = ['Trillion', 'Trillionen'];
    this.cntWords['7'] = ['Trilliarde', 'Trilliarden'];

    GermanNumbers.prototype.onesToWord = function(ones, tens, cnt) {
        
        if (ones == 1) {
            if (cnt >1) {
                return this.numberWords[ones][1];
            }
            else if (cnt == 1 || tens > 1) {
                return this.numberWords[ones][2];
            }
        }
        
        return this.numberWords[ones][0];

    }

    GermanNumbers.prototype.tensToWord = function(ones, tens, cnt) {                
        if (ones == "") return "";
        
        onesAsWord = this.onesToWord(ones, tens, cnt);
        
        if (tens == 0) {
            return onesAsWord;                            
        } else if (tens == 1) {
            return this.numberWords[tens + ones][0];
        } else {
            tensAsWord = this.numberWords[tens * 10][0];
            
            if (ones != 0) {
                tensAsWord = onesAsWord + "und" + tensAsWord;
            }
            return tensAsWord;
        }
    }
    
    GermanNumbers.prototype.hundredsToWord = function(hundreds) {
        if (hundreds == "") return "";

        return this.numberWords[hundreds * 100][0];
    }
    
    GermanNumbers.prototype.cntToWord = function(cnt, ones) {
        cntAsWord = this.cntWords[cnt];

        if (cnt > 1 && ones != 1) {
            return " " + cntAsWord[1];
        } 
        else if (cnt > 1 && ones == 1) {
            return " " + cntAsWord[0];
        }
        else {
            return cntAsWord[0];
        }
    }
    
    GermanNumbers.prototype.numberToWord = function(ones, tens, hundreds, cnt){
        tensAsWord = this.tensToWord(ones, tens, cnt);
        hundredsAsWord = this.hundredsToWord(hundreds);
        numberWord = hundredsAsWord + tensAsWord;
        
        if (numberWord != "") {
            cntAsWord = this.cntToWord(cnt, ones);
            numberWord = numberWord + cntAsWord;
        }

        return numberWord;
    }
    GermanNumbers.prototype.getDelimiter = function(cnt) {
        if (cnt > 1) {
            return " ";
        }
        else
        {
            return "";
        }
    }
    
    GermanNumbers.prototype.numberToWordFull = function(number) {
        if (number.value == "") return "";
        if (number.value == 0) return number.value[0][1];

        var number_length = number.value.length;
        var numberAsWord = "";
        var cnt = 0;
        var ones = "";
        var tens = "";
        var hundreds = "";
        for (var i = 1; i <= number_length; i++) {
            if (i % 3 == 1) {
                ones = number.value[number_length - i];
                if ((ones >= 0 && ones <= 9) == false || ones == " ") return "";
            } else if (i % 3 == 2) {
                tens = number.value[number_length - i];
                if ((tens >= 0 && tens <= 9) == false || tens == " ") return "";
            } else if (i % 3 == 0) {
                hundreds = number.value[number_length - i];
                if ((hundreds >= 0 && hundreds <= 9) == false || hundreds == " ") return "";
                
                if (numberAsWord.length > 0) {
                    numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + this.getDelimiter(cnt) + numberAsWord;
                }
                else {
                    numberAsWord = this.numberToWord(ones, tens, hundreds, cnt);
                }
                ones = "";
                tens = "";
                hundreds = "";
                
                cnt++;
            }                   
        }

        if (ones != 0 || tens != 0 || hundreds != 0) {
            if (numberAsWord.length > 0) {
                numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + this.getDelimiter(cnt) + numberAsWord;
            }
            else {
                numberAsWord = this.numberToWord(ones, tens, hundreds, cnt);
            }
        }
        
        return numberAsWord;
    }                
}

function FrenchNumbers() {
    this.numberWords = {};
    this.numberWords['0']           = ['', 'zeró'];
    this.numberWords['1']           = ['un', ''];
    this.numberWords['2']           = ['deux'];
    this.numberWords['3']           = ['trois'];
    this.numberWords['4']           = ['quatre'];
    this.numberWords['5']           = ['cinq'];
    this.numberWords['6']           = ['six'];
    this.numberWords['7']           = ['sept'];
    this.numberWords['8']           = ['huit'];
    this.numberWords['9']           = ['neuf'];
    this.numberWords['10']          = ['dix'];
    this.numberWords['11']          = ['onze'];
    this.numberWords['12']          = ['douze'];
    this.numberWords['13']          = ['treize'];
    this.numberWords['14']          = ['quatorze'];
    this.numberWords['15']          = ['quinze'];
    this.numberWords['16']          = ['seize'];
    this.numberWords['17']          = ['dix-sept'];
    this.numberWords['18']          = ['dix-huit'];
    this.numberWords['19']          = ['dix-neuf'];
    this.numberWords['20']          = ['vingt'];
    this.numberWords['30']          = ['trente'];
    this.numberWords['40']          = ['quarante'];
    this.numberWords['50']          = ['cinquante'];
    this.numberWords['60']          = ['soixante'];
    this.numberWords['80']          = ['quatre-vingts', 'quatre-vingt'];
    this.numberWords['100']          = ['cent'];
    this.numberWords['200']         = ['deux cents', 'deux cent'];
    this.numberWords['300']         = ['trois cents', 'trois cent'];
    this.numberWords['400']         = ['quatre cents', 'quatre cent'];
    this.numberWords['500']         = ['cinq cents', 'cinq cent'];
    this.numberWords['600']         = ['six cents', 'six cent'];
    this.numberWords['700']         = ['sept cents', 'sept cent'];
    this.numberWords['800']         = ['huit cents', 'huit cent'];
    this.numberWords['900']         = ['neuf cents', 'neuf cent'];

    this.cntWords = {};
    this.cntWords['0'] = [''];
    this.cntWords['1'] = ['mille'];
    this.cntWords['2'] = ['million', 'millions'];
    this.cntWords['3'] = ['milliard', 'milliards'];
    this.cntWords['4'] = ['billion', 'billions'];
    this.cntWords['5'] = ['mille billions'];
    this.cntWords['6'] = ['trillion', 'trillions'];
    this.cntWords['7'] = ['mille trillions'];

    FrenchNumbers.prototype.tensToWord = function(ones, tens) {
        onesAsWord = this.numberWords[ones][0];
        
        if (tens == 0) {
            tensAsWord = onesAsWord;
        } 
        else if (tens == 1) {           
            tensAsWord = this.numberWords[tens + ones][0];
        } 
        else if (tens >= 2 && tens < 7){
            tensAsWord = this.numberWords[tens * 10][0];
            if (ones == 1) {
                tensAsWord = tensAsWord +  " et " + onesAsWord;
            }
            else if (ones > 1) {
                tensAsWord = tensAsWord +  "-" + onesAsWord;
            }
        }
        else if (tens == 7){
            tensAsWord = this.tensToWordsForSeventies(ones);
        }
        else if (tens == 8) {
            tensAsWord = this.tensToWordsForEighties(ones);
        }
        else {
            tensAsWord = this.tensToWordsForNineties(ones);
        }
        
        return tensAsWord;
    }

    FrenchNumbers.prototype.tensToWordsForSeventies = function(ones) {
        tensAsWord = this.numberWords[60][0];
        onesAsWord = this.numberWords[1 + ones][0];
        
        if (ones == 1) {
            tensAsWord = tensAsWord +  " et " + onesAsWord;
        }
        else {
            tensAsWord = tensAsWord +  "-" + onesAsWord;
        }
        return tensAsWord;

    }

    FrenchNumbers.prototype.tensToWordsForEighties = function(ones) {
        tensAsWord = this.numberWords[80];
        onesAsWord = this.numberWords[ones][0];
        
        if (ones == 0) {
            return tensAsWord[0];
        }
        else {
            return tensAsWord[1] +  "-" + onesAsWord;
        }
    }

    FrenchNumbers.prototype.tensToWordsForNineties = function(ones) {
        tensAsWord = this.numberWords[80][1];
        onesAsWord = this.numberWords[1 + ones][0];
        tensAsWord = tensAsWord +  "-" + onesAsWord;

        return tensAsWord;        
    }
            
    FrenchNumbers.prototype.hundredsToWord = function(ones, tens, pHundreds) {
        if (pHundreds == 0) {
            return "";
        } 
        else {
            hundreds = this.numberWords[pHundreds * 100];
            if (ones == 0 && tens == 0 || pHundreds == 1) {
                return hundreds[0];
            }
            else {
                return hundreds[1];
            }
        }
    }
            
    FrenchNumbers.prototype.cntToWord = function(cnt, ones, tens) {
        cntAsWord = this.cntWords[cnt];

        if (ones != 1 && (cnt == 2 || cnt == 4 || cnt == 6)) {
            return cntAsWord[1];
        }
        else {
            return cntAsWord[0];
        }
    }
            
    FrenchNumbers.prototype.numberToWord = function(ones, tens, hundreds, cnt){
        if (ones == 1 && tens == 0 && hundreds == 0 && cnt == 1) {
            numberWord =  this.numberWords[ones][1];
        }
        else {
            tensAsWord = this.tensToWord(ones, tens);
            hundredsAsWord = this.hundredsToWord(ones, tens, hundreds);
    
            if (hundreds == 0) {
                numberWord = tensAsWord;
            }
            else if (ones == 0 && tens == 0) {
                numberWord = hundredsAsWord;
            }
            else {
                numberWord = hundredsAsWord + " " + tensAsWord;
            }
        }
        
        if (cnt > 0) {            
            cntAsWord = this.cntToWord(cnt, ones, tens);
            if (cnt == 1 && ones == 1 && tens == 0 && hundreds == 0) {
                numberWord = cntAsWord;
            }
            else if (numberWord != ""){
                numberWord = numberWord + " " + cntAsWord;
            }
        }

        return numberWord;
    }
            
    FrenchNumbers.prototype.numberToWordFull = function(number) {
        if (number.value == "") return "";
        if (number.value == 0) return this.numberWords[0][1];
        
        var number_length = number.value.length;
        var numberAsWord = "";
        var cnt = 0;
        var ones = "";
        var tens = "";
        var hundreds = "";
        for (var i = 1; i <= number_length; i++) {
            if (i % 3 == 1) {
                ones = number.value[number_length - i];
                if ((ones >= 0 && ones <= 9) == false || ones == " ") return "";
            } else if (i % 3 == 2) {
                tens = number.value[number_length - i];
                if ((tens >= 0 && tens <= 9) == false || tens == " ") return "";
            } else if (i % 3 == 0) {
                hundreds = number.value[number_length - i];
                if ((hundreds >= 0 && hundreds <= 9) == false || hundreds == " ") return "";
                
                if (numberAsWord.length > 0) {
                    numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + " " + numberAsWord;
                }
                else {
                    numberAsWord = this.numberToWord(ones, tens, hundreds, cnt);
                }
                ones = "";
                tens = "";
                hundreds = "";
                
                cnt++;
            }                   
        }

        if (ones != 0 || tens != 0 || hundreds != 0) {
            if (numberAsWord.length > 0) {
                numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + " " + numberAsWord;
            }
            else {
                numberAsWord = this.numberToWord(ones, tens, hundreds, cnt);
            }
        }
        
        return numberAsWord;
    }

}

function SpanishNumbers() {
    this.numberWords = {};
    this.numberWords['0']           = ['', 'cero'];
    this.numberWords['1']           = ['uno', '', 'un'];
    this.numberWords['2']           = ['dos'];
    this.numberWords['3']           = ['tres'];
    this.numberWords['4']           = ['cuatro'];
    this.numberWords['5']           = ['cinco'];
    this.numberWords['6']           = ['seis'];
    this.numberWords['7']           = ['siete'];
    this.numberWords['8']           = ['ocho'];
    this.numberWords['9']           = ['nueve'];
    this.numberWords['10']          = ['diez'];
    this.numberWords['11']          = ['once'];
    this.numberWords['12']          = ['doce'];
    this.numberWords['13']          = ['trece'];
    this.numberWords['14']          = ['catorce'];
    this.numberWords['15']          = ['quince'];
    this.numberWords['16']          = ['dieciséis'];
    this.numberWords['17']          = ['diecisiete'];
    this.numberWords['18']          = ['dieciocho'];
    this.numberWords['19']          = ['diecinueve'];
    this.numberWords['20']          = ['veinte'];
    this.numberWords['21']          = ['veintiuno'];
    this.numberWords['22']          = ['veintidos'];
    this.numberWords['23']          = ['veintitrés'];
    this.numberWords['24']          = ['veinticuatro'];
    this.numberWords['25']          = ['veinticinco'];
    this.numberWords['26']          = ['veintiséis'];
    this.numberWords['27']          = ['veintisiete'];
    this.numberWords['28']          = ['veintiocho'];
    this.numberWords['29']          = ['veintinueve'];
    this.numberWords['30']          = ['treinta'];
    this.numberWords['40']          = ['cuarenta'];
    this.numberWords['50']          = ['cincuenta'];
    this.numberWords['60']          = ['sesenta'];
    this.numberWords['70']          = ['setenta'];
    this.numberWords['80']          = ['ochenta'];
    this.numberWords['90']          = ['noventa'];
    this.numberWords['100']         = ['ciento'];
    this.numberWords['200']         = ['doscientos'];
    this.numberWords['300']         = ['trescientos'];
    this.numberWords['400']         = ['cuatrocientos'];
    this.numberWords['500']         = ['quinientos'];
    this.numberWords['600']         = ['seiscientos'];
    this.numberWords['700']         = ['setecientos'];
    this.numberWords['800']         = ['ochocientos'];
    this.numberWords['900']         = ['novecientos'];

    this.cntWords = {};
    this.cntWords['0'] = [''];
    this.cntWords['1'] = ['mil'];
    this.cntWords['2'] = ['millón', 'millones'];
    this.cntWords['3'] = ['mil millones'];
    this.cntWords['4'] = ['billón', 'billones'];
    this.cntWords['5'] = ['mil billones'];
    this.cntWords['6'] = ['trillón', 'trillones'];
    this.cntWords['7'] = ['mil trillones'];
            
    SpanishNumbers.prototype.tensToWord = function(ones, tens) {
        onesAsWord = this.numberWords[ones][0];
        
        if (tens == 0) {
            tensAsWord = onesAsWord;
        } 
        else if (tens <= 2) {          
            tensAsWord = this.numberWords[tens + ones][0];
        } 
        else {
            tensAsWord = this.numberWords[tens * 10][0];
            if (ones != 0) {
                tensAsWord = tensAsWord + ' et ' + onesAsWord;
            }   
        }
        
        return tensAsWord;

    }
            
    SpanishNumbers.prototype.hundredsToWord = function(hundreds) {
        if (hundreds == 0) {
            return "";
        } 
        else {
            return this.numberWords[hundreds * 100][0];
        }
    }
            
    SpanishNumbers.prototype.cntToWord = function(cnt, ones, tens) {
        cntAsWord = this.cntWords[cnt];

        if (ones != 1 && (cnt == 2 || cnt == 4 || cnt == 6)) {
            return cntAsWord[1];
        }
        else {
            return cntAsWord[0];
        }
    }
            
    SpanishNumbers.prototype.numberToWord = function(ones, tens, hundreds, cnt){
        if (ones == 1 && tens == 0 && hundreds == 0 && cnt == 1) {
            numberWord =  this.numberWords[ones][1];
        }
        else if (ones == 1 && tens == 0 && hundreds == 0 && cnt != 0) {
            numberWord = this.numberWords[ones][2];
        } 
        else {
            tensAsWord = this.tensToWord(ones, tens);
            hundredsAsWord = this.hundredsToWord(hundreds);
    
            if (hundreds == 0) {
                numberWord = tensAsWord;
            }
            else if (ones == 0 && tens == 0) {
                numberWord = hundredsAsWord;
            }
            else {
                numberWord = hundredsAsWord + " " + tensAsWord;
            }
        }
        
        if (cnt > 0) {            
            cntAsWord = this.cntToWord(cnt, ones, tens);
            if (cnt == 1 && ones == 1 && tens == 0 && hundreds == 0) {
                numberWord = cntAsWord;
            }
            else if (numberWord != ""){
                numberWord = numberWord + " " + cntAsWord;
            }
        }

        return numberWord;
    }
            
    SpanishNumbers.prototype.numberToWordFull = function(number) {
        if (number.value == "") return "";
        if (number.value == 0) return this.numberWords[0][1];
        
        var number_length = number.value.length;
        var numberAsWord = "";
        var cnt = 0;
        var ones = "";
        var tens = "";
        var hundreds = "";
        for (var i = 1; i <= number_length; i++) {
            if (i % 3 == 1) {
                ones = number.value[number_length - i];
                if ((ones >= 0 && ones <= 9) == false || ones == " ") return "";
            } else if (i % 3 == 2) {
                tens = number.value[number_length - i];
                if ((tens >= 0 && tens <= 9) == false || tens == " ") return "";
            } else if (i % 3 == 0) {
                hundreds = number.value[number_length - i];
                if ((hundreds >= 0 && hundreds <= 9) == false || hundreds == " ") return "";
                
                if (numberAsWord.length > 0) {
                    numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + " " + numberAsWord;
                }
                else {
                    numberAsWord = this.numberToWord(ones, tens, hundreds, cnt);
                }
                ones = "";
                tens = "";
                hundreds = "";
                
                cnt++;
            }                   
        }

        if (ones != 0 || tens != 0 || hundreds != 0) {
            if (numberAsWord.length > 0) {
                numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + " " + numberAsWord;
            }
            else {
                numberAsWord = this.numberToWord(ones, tens, hundreds, cnt);
            }
        }
        
        return numberAsWord;
    }
}

function RussianNumbers() {
    this.numberWords = {};
    this.numberWords['0']           = ['', 'ноль'];
    this.numberWords['1']           = ['один', 'одна'];
    this.numberWords['2']           = ['два', 'две'];
    this.numberWords['3']           = ['три'];
    this.numberWords['4']           = ['четыре'];
    this.numberWords['5']           = ['пять'];
    this.numberWords['6']           = ['шесть'];
    this.numberWords['7']           = ['семь'];
    this.numberWords['8']           = ['восемь'];
    this.numberWords['9']           = ['девять'];
    this.numberWords['10']          = ['десять'];
    this.numberWords['11']          = ['одиннадцать'];
    this.numberWords['12']          = ['двеннадцать'];
    this.numberWords['13']          = ['триннадцать'];
    this.numberWords['14']          = ['четырнадцать'];
    this.numberWords['15']          = ['пятнадцать'];
    this.numberWords['16']          = ['шестнадцать'];
    this.numberWords['17']          = ['семнадцать'];
    this.numberWords['18']          = ['восемнадцать'];
    this.numberWords['19']          = ['девятнадцать'];
    this.numberWords['20']          = ['двадцать'];
    this.numberWords['30']          = ['тридцать'];
    this.numberWords['40']          = ['сорок'];
    this.numberWords['50']          = ['пятьдесят'];
    this.numberWords['60']          = ['шестьдесят'];
    this.numberWords['70']          = ['семьдесят'];
    this.numberWords['80']          = ['восемьдесят'];
    this.numberWords['90']          = ['девяносто'];
    this.numberWords['100']         = ['сто'];
    this.numberWords['200']         = ['двести'];
    this.numberWords['300']         = ['триста'];
    this.numberWords['400']         = ['четыреста'];
    this.numberWords['500']         = ['пятьсот'];
    this.numberWords['600']         = ['шестьсот'];
    this.numberWords['700']         = ['семьсот'];
    this.numberWords['800']         = ['восемьсот'];
    this.numberWords['900']         = ['девятьсот'];
    
    this.cntWords = {};
    this.cntWords['0'] = [''];
    this.cntWords['1'] = ['тысяча', 'тысячи', 'тысяч'];
    this.cntWords['2'] = ['миллион', 'миллиона', 'миллионов'];
    this.cntWords['3'] = ['миллиард', 'миллиарда','миллиардов'];
    this.cntWords['4'] = ['триллион', 'триллиона', 'триллионов'];
    this.cntWords['5'] = ['квадриллион', 'квадриллиона', 'квадриллионов'];
    this.cntWords['6'] = ['квинтиллион', 'квинтиллиона', 'квинтиллионов'];
    this.cntWords['7'] = ['секстиллион', 'секстиллиона', 'секстиллионов'];
    
    RussianNumbers.prototype.tensToWord = function(ones, tens, cnt) {                
        if (ones == "") return "";

        if (cnt == 1 && (ones == 1 || ones == 2)) {
            onesAsWord = this.numberWords[ones][1];            
        } 
        else {
            onesAsWord = this.numberWords[ones][0];
        }
        
        if (tens == 0) {
            tensAsWord = onesAsWord;                            
        } else if (tens == 1) {
            tensAsWord = this.numberWords[tens + ones][0];
        } else {
            tensAsWord = this.numberWords[tens * 10][0];
            
            if (ones != 0) {
                tensAsWord = tensAsWord + " " + onesAsWord;
            }
        }
        
        return tensAsWord;
    }
    
    RussianNumbers.prototype.hundredsToWord = function(hundreds) {
        if (hundreds == "" || hundreds == 0) return "";

        return this.numberWords[hundreds * 100][0];
    }
    
    RussianNumbers.prototype.cntToWord = function(cnt, ones, tens) {
        cntAsWord = this.cntWords[cnt];

        if (cnt == 0) {
            return cntAsWord[0];
        }
        else {
            if (tens == 1 || ones == 0 || ones > 4) {
                return cntAsWord[2];
            }
            else if (ones == 1) {
                return cntAsWord[0];
            } 
            else {
                return cntAsWord[1];
            }
        }
    }
    
    RussianNumbers.prototype.numberToWord = function(ones, tens, hundreds, cnt){
        tensAsWord = this.tensToWord(ones, tens, cnt);
        hundredsAsWord = this.hundredsToWord(hundreds);
        
        if (hundreds == 0) {
            numberword = tensAsWord;
        }
        else {
            if (ones == 0 && tens == 0) {
                numberword = hundredsAsWord;
            }
            else {
                numberword = hundredsAsWord + " " +tensAsWord;
            }
        }
        
        if (numberword != "" && cnt > 0) {
            cntAsWord = this.cntToWord(cnt, ones, tens);
            numberword = numberword + " " + cntAsWord;
        }

        return numberword;
    }
    
    RussianNumbers.prototype.numberToWordFull = function(number) {
        if (number.value == "") return "";
        if (number.value == 0) return number.value[0][1];
        
        var number_length = number.value.length;
        var numberAsWord = "";
        var cnt = 0;
        var ones = "";
        var tens = "";
        var hundreds = "";
        for (var i = 1; i <= number_length; i++) {
            if (i % 3 == 1) {
                ones = number.value[number_length - i];
                if ((ones >= 0 && ones <= 9) == false || ones == " ") return "";
            } else if (i % 3 == 2) {
                tens = number.value[number_length - i];
                if ((tens >= 0 && tens <= 9) == false || tens == " ") return "";
            } else if (i % 3 == 0) {
                hundreds = number.value[number_length - i];
                if ((hundreds >= 0 && hundreds <= 9) == false || hundreds == " ") return "";
                
                if (numberAsWord.length > 0) {
                    numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + " " + numberAsWord;
                }
                else {
                    numberAsWord = this.numberToWord(ones, tens, hundreds, cnt);
                }
                ones = "";
                tens = "";
                hundreds = "";
                
                cnt++;
            }                   
        }
       
        if (ones != 0 || tens != 0 || hundreds != 0) {
            if (numberAsWord.length > 0) {
                numberAsWord = this.numberToWord(ones, tens, hundreds, cnt) + " " + numberAsWord;
            }
            else {
                numberAsWord = this.numberToWord(ones, tens, hundreds, cnt);
            }
        }
        
        return numberAsWord;
    }
    
}

var language = "EN";
var headerRu = "nmb3rs - числа словами";
var headerEn = "nmb3rs - numbers in words";
var headerDe = "nmb3rs - Zahlen in Worten"

function changeNumbersLanguage(selectedLanguage) {
    if (language != selectedLanguage) {
        document.getElementById(language).className = "language";
        document.getElementById(selectedLanguage).className = "selectedLanguage";
        language = selectedLanguage;
        callNumberToWord();
    }
}

var sNumber;
var sNumberword;

var russianNumbers;
var germanNumbers;
var spanishNumbers;
var englishNumbers;
var frenchNumbers;
var voicerssLanguage;

function callNumberToWord() {

    if (sNumber == null) {
        sNumber=document.getElementById("number");
    }

    if (sNumberword == null) {
        sNumberword=document.getElementById("numberword");
    }

    var number_length = sNumber.value.length;
    if (number_length > 24) {
        sNumberword.value = "";
        return;
    }

    var numberwordAsWord;

    if (language == "RU") {
        if (russianNumbers == null) {
            russianNumbers = new RussianNumbers();
        }

        voicerssLanguage = "ru-ru";
        numberwordAsWord = russianNumbers.numberToWordFull(sNumber);
    }
    else if (language == "EN") {
        if (englishNumbers == null) {
            englishNumbers = new EnglishNumbers();
        }

        voicerssLanguage = "en-gb";
        numberwordAsWord = englishNumbers.numberToWordFull(sNumber);
    }
    else if (language == "DE") {
        if (germanNumbers == null) {
            germanNumbers = new GermanNumbers();
        }

        voicerssLanguage = "de-de";
        numberwordAsWord = germanNumbers.numberToWordFull(sNumber);
    }
    else if (language == "ES") {
        if (spanishNumbers == null) {
            spanishNumbers = new SpanishNumbers();
        }

        voicerssLanguage = "es-es";            
        numberwordAsWord = spanishNumbers.numberToWordFull(sNumber);
    }
    else if (language == "FR") {
        if (frenchNumbers == null) {
            frenchNumbers = new FrenchNumbers();
        }

        voicerssLanguage = "fr-fr";
        numberwordAsWord = frenchNumbers.numberToWordFull(sNumber);
    }


	sNumberword.value = "";
	if (numberwordAsWord.indexOf("undefined") == -1) { 
		sNumberword.value = numberwordAsWord;
	}
}

function listenNumber() {
    if (sNumberword != null) {
        key = "6922778f94dc4c33a6c4d5fb4fde5987";
        if (document.getElementById("audioPlayer").canPlayType('audio/mpeg') != "") {
            codec = "mp3";
        }
        else {
            codec = "wav";
        }

        apiLink = "http://api.voicerss.org/?key=" + key + "&hl=" + voicerssLanguage + "&src=" + sNumberword.value + "&c=" + codec;

        document.getElementById("audioPlayer").src = apiLink

    }
}

window['callNumberToWord'] = callNumberToWord;
window['changeNumbersLanguage'] = changeNumbersLanguage;
window['listenNumber'] = listenNumber;