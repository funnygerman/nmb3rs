package com.funnygerman.nmb3rs;

import com.funnygerman.nmb3rs.impl.NumbersImpl;
import com.funnygerman.nmb3rs.impl.NumbersImpl.LANGUAGE;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by timur on 12.02.17.
 */
public class RussianNumbersTest extends AbstractNumbersTest {
    @Test
    public void testZero() {
        Numbers numbersRu = new NumbersImpl();
        assertEquals("ноль", numbersRu.getNumberAsWord("0", mTestLanguage));
    }

    @Override
    protected LANGUAGE getTestLanguage() {
        return LANGUAGE.RU;
    }
}