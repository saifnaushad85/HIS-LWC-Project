public with sharing class CalcuateNumber {
    public CalcuateNumber() {

    }

    @AuraEnabled
    public static Integer getSumResult(Integer Fnumber,Integer SNumber)
    {
        return Fnumber+SNumber;

    }
}
