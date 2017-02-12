package com.funnygerman.nmb3rs.impl;

import com.funnygerman.nmb3rs.Numbers;

import java.util.Locale;

public class NumbersImpl implements Numbers {

    // supported languages
    public enum LANGUAGE
    {
        DE("de", Locale.GERMAN),
        RU("ru", new Locale("ru", "RU")),
        EN("en", Locale.ENGLISH),
        FR("fr", Locale.FRENCH),
        TR("tr", new Locale("tr", "TR")),
        ES("es", new Locale("es", "ES"));

        private final String mShortName;
        private final Locale mLocale;

        /**
         * Constructor for supported languages
         * @param pShortName language short name
         * @param pLocale corresponding locale
         */
        LANGUAGE(final String pShortName, final Locale pLocale) {
            mShortName = pShortName;
            mLocale = pLocale;
        }

        public String getLang() {
            return mShortName;
        }

        /**
         * Returns locale
         * @return locale
         */
        public Locale getLocale() {
            return mLocale;
        }

        /**
         * Get language from given string
         * @param pLangStr language as string
         * @return language
         */
        public static LANGUAGE fromString(String pLangStr) {
            if (pLangStr != null) {
                pLangStr = pLangStr.toLowerCase();
                for (LANGUAGE lang: LANGUAGE.values()) {
                    if (lang.getLang().equals(pLangStr)) {
                        return lang;
                    }
                }
            }

            // TODO probably better it should return an exception or at least a warning
            return LANGUAGE.EN;
        }
    }

    public String getNumberAsWord(final String pNumber, final LANGUAGE pLang) {
        return null;
    }

    public String getNumberAsWord(final String pNumber, final Locale pLang) {
        return null;
    }

}
