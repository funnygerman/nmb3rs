package com.funnygerman.nmb3rs;

import org.junit.Test;

import com.funnygerman.nmb3rs.impl.NumbersImpl;
import com.funnygerman.nmb3rs.impl.NumbersImpl.LANGUAGE;

public abstract class AbstractNumbersTest {

    protected LANGUAGE mTestLanguage;
    
    {
    	mTestLanguage = getTestLanguage();
    }
    
	@Test
	public void test0t999999() {
		Numbers numbers = new NumbersImpl();
		for (int i = 0; i < 999999; i++) {
			numbers.getNumberAsWord(String.valueOf(i), mTestLanguage);
		}
	}
	
	protected abstract LANGUAGE getTestLanguage();
}