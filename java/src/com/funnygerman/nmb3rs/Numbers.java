package com.funnygerman.nmb3rs;

import com.funnygerman.nmb3rs.impl.NumbersImpl.LANGUAGE;

/**
 * An interface for getting numbers as numbers in words
 */
public interface Numbers {
    String getNumberAsWord(final String pNumber, final LANGUAGE pLang);
}
