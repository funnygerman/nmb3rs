package com.funnygerman.nmb3rs.impl;

import com.funnygerman.nmb3rs.values.RussianNumbers;

public class RussianNumbersImpl extends BasicNumbersImpl {

    private static final String DELIMITER = " ";

    private RussianNumbersImpl() {}
	
	private static final RussianNumbersImpl mInstance = new RussianNumbersImpl();
	
	public static String getNumberAsWord(final String pNumber) {
		return mInstance.getNumberWord(pNumber);
	}

	protected String getZero() {
		return RussianNumbers.getNumberWord(0)[1];
	}
	
	protected String numberToWord(final int pOnes, final int pTens, final int pHundreds, final int pCnt) {
        String tensAsWord = tensToWord(pOnes, pTens, pCnt);
        String hundredsAsWord = hundredsToWord(pHundreds);
        String numberWord;

        if (pHundreds == 0) {
        	numberWord = tensAsWord;
        } else if (pOnes == 0 && pTens == 0) {
        	numberWord = hundredsAsWord;
        } else {
        	numberWord = hundredsAsWord + DELIMITER + tensAsWord;
        }

        if (!"".equals(numberWord) && pCnt > 0) {            
        	String cntAsWord = cntToWord(pCnt, pOnes, pTens);
        	numberWord = numberWord + DELIMITER + cntAsWord;
        }

        return numberWord;
    }	
	
	private static String tensToWord(final int pOnes, final int pTens,final int pCnt) {
		String onesAsWord;
		
		if (pCnt == 1 && (pOnes == 1 || pOnes == 2)) {
			onesAsWord = RussianNumbers.getNumberWord(pOnes)[1];			
		} 
		else {
			onesAsWord = RussianNumbers.getNumberWord(pOnes) [0];
		}
		
		String tensAsWord;
		if (pTens == 0) {
			tensAsWord = onesAsWord;
		} else if (pTens == 1) {
			tensAsWord = RussianNumbers.getNumberWord(pTens * 10 + pOnes)[0];
		} else {
			tensAsWord = RussianNumbers.getNumberWord(pTens * 10)[0];
			if (pOnes != 0) {
				tensAsWord = tensAsWord +  DELIMITER + onesAsWord;
			}	
		}
		
		return tensAsWord;
	}
	
	private static String hundredsToWord(final int pHundreds) {
		if (pHundreds == 0) {
			return "";
		} else {
			return RussianNumbers.getNumberWord(pHundreds * 100)[0];
		}
	}

	private static String cntToWord(final int pCnt, final int pOnes, final int pTens) {
		String[] cntAsWord = RussianNumbers.getCntWord(pCnt);

		if (pCnt == 0) {
			return cntAsWord[0];
		} else {
			if (pTens == 1 || pOnes == 0 || pOnes > 4) {
				return cntAsWord[2];
			} else if (pOnes == 1) {
				return cntAsWord[0];
			} else {
				return cntAsWord[1];
			}
		}
	}

	@Override
	protected String getDelimiter(int pCnt) {
		return DELIMITER;
	}

}