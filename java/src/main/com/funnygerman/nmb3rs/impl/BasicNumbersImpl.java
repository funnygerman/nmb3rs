package com.funnygerman.nmb3rs.impl;

/**
 * This class contains the basic implementation of all number classes for different languages
 */
abstract class BasicNumbersImpl {

    /**
     * The protected constructor
     */
    BasicNumbersImpl() {}

    /**
     * This method can be used for all languages because algorithm is the same
     * Divide in groups of three digits and get the group word
     * @param pNumberAsStr - number to convert into words. As string to avoid number limits
     * @return number as word
     */
    String getNumberWord(String pNumberAsStr) {
        // check if the given string is a number at all
        if (!pNumberAsStr.matches("[0-9]+"))
        {
            return "Error!!! Not a number!!!";
        }

        // checks if it's only zero
        if (pNumberAsStr.matches("0+"))
        {
            return getZero();
        }

        // replace leading zeros
        // http://stackoverflow.com/questions/2800739/how-to-remove-leading-zeros-from-alphanumeric-text
        pNumberAsStr = pNumberAsStr.replaceFirst("^0+(?!$)", "");

        int numberLength = pNumberAsStr.length();
        StringBuilder strB = new StringBuilder();
        int cnt = 0;
        int ones = 0;
        int tens = 0;
        int hundreds = 0;

        // divide given number in groups of three digits
        for (int i = 1; i <= numberLength; i++) {
            if (i % 3 == 1) {
                ones = Character.getNumericValue(pNumberAsStr.charAt(numberLength - i));
            }
            else if (i % 3 == 2) {
                tens = Character.getNumericValue(pNumberAsStr.charAt(numberLength - i));
            }
            else if (i % 3 == 0) {
                hundreds = Character.getNumericValue(pNumberAsStr.charAt(numberLength - i));

                String numberAsWord = numberToWord(ones, tens, hundreds, cnt);
                insertOrAppendNumberAsWord(strB, cnt, numberAsWord);

                ones = 0;
                tens = 0;
                hundreds = 0;
                cnt++;
            }
        }

        String numberAsWord = numberToWord(ones, tens, hundreds, cnt);
        if (ones != 0 || tens != 0) {
            insertOrAppendNumberAsWord(strB, cnt, numberAsWord);
        }

        return strB.toString();
    }

    private void insertOrAppendNumberAsWord(final StringBuilder strB, final int cnt, final String numberAsWord) {
        if (strB.length() > 0) {
            strB.insert(0, getDelimiter(cnt)).insert(0, numberAsWord);
        }
        else {
            strB.append(numberAsWord);
        }
    }

    /**
     * Get number as word for the group of three digits depending on language implementation
     *
     * @param pOnes - first digit
     * @param pTens - second digit
     * @param pHundreds - third digit
     * @param pCnt - group counter
     * @return number as word
     */
    protected abstract String numberToWord(final int pOnes, final int pTens, final int pHundreds, final int pCnt);

    /**
     * Return zero as word
     * @return zero as word
     */
    protected abstract String getZero();

    /**
     * Return delimiter between two groups of three digits depending on language implementation
     * @param pCnt the group counter
     * @return the delimiter between two groups
     */
    protected abstract String getDelimiter(final int pCnt);
}