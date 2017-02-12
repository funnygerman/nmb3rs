package com.funnygerman.nmb3rs.values;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class RussianNumbers {

	private static Map<Integer, String[]> numberWords = null;
	private static List<String[]> cntWords = null;
	
	static {
		initNumberWords();
		initCntWords();
	}
	
	private RussianNumbers() {
	}
	
	public static String[] getNumberWord(final int pNumber) {
		return numberWords.get(pNumber);
	}
	
	public static String[] getCntWord(final int pCnt) {
		return cntWords.get(pCnt);
	}


	private static void initNumberWords() {
		numberWords = new HashMap<>();
        numberWords.put(0, new String[]{"", "ноль"});
        numberWords.put(1, new String[]{"один", "одна"});
        numberWords.put(2, new String[]{"два", "две"});
        numberWords.put(3, new String[]{"три"});
        numberWords.put(4, new String[]{"четыре"});
        numberWords.put(5, new String[]{"пять"});
        numberWords.put(6, new String[]{"шесть"});
        numberWords.put(7, new String[]{"семь"});
        numberWords.put(8, new String[]{"восемь"});
        numberWords.put(9, new String[]{"девять"});
        numberWords.put(10, new String[]{"десять"});
        numberWords.put(11, new String[]{"одиннадцать"});
        numberWords.put(12, new String[]{"двеннадцать"});
        numberWords.put(13, new String[]{"триннадцать"});
        numberWords.put(14, new String[]{"четырнадцать"});
        numberWords.put(15, new String[]{"пятнадцать"});
        numberWords.put(16, new String[]{"шестнадцать"});
        numberWords.put(17, new String[]{"семнадцать"});
        numberWords.put(18, new String[]{"восемнадцать"});
        numberWords.put(19, new String[]{"девятнадцать"});
        numberWords.put(20, new String[]{"двадцать"});
        numberWords.put(30, new String[]{"тридцать"});
        numberWords.put(40, new String[]{"сорок"});
        numberWords.put(50, new String[]{"пятьдесят"});
        numberWords.put(60, new String[]{"шестьдесят"});
        numberWords.put(70, new String[]{"семьдесят"});
        numberWords.put(80, new String[]{"восемьдесят"});
        numberWords.put(90, new String[]{"девяносто"});
		numberWords.put(100, new String[]{"сто"});
		numberWords.put(200, new String[]{"двести"});
		numberWords.put(300, new String[]{"триста"});
		numberWords.put(400, new String[]{"четыреста"});
		numberWords.put(500, new String[]{"пятьсот"});
		numberWords.put(600, new String[]{"шестьсот"});
		numberWords.put(700, new String[]{"семьсот"});
		numberWords.put(800, new String[]{"восемьсот"});
		numberWords.put(900, new String[]{"девятьсот"});
	}
	
	private static void initCntWords() {
		cntWords = new ArrayList<>();
		cntWords.add(new String[]{""});
		cntWords.add(new String[]{"тысяча", "тысячи", "тысяч"});
		cntWords.add(new String[]{"миллион", "миллиона", "миллионов"});
		cntWords.add(new String[]{"миллиард", "миллиарда","миллиардов"});
		cntWords.add(new String[]{"триллион", "триллиона", "триллионов"});
		cntWords.add(new String[]{"квадриллион", "квадриллиона", "квадриллионов"});
		cntWords.add(new String[]{"квинтиллион", "квинтиллиона", "квинтиллионов"});
		cntWords.add(new String[]{"секстиллион", "секстиллиона", "секстиллионов"});
	}
}