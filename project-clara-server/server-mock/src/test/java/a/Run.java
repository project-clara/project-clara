package a;

import org.junit.Test;

interface staticInterface{
    static void inc(){
        System.out.print("inc");
    }
}

interface defaultInterface{
    default void inc(){
        System.out.print("default inc");
    }
}

class TestA //implements defaultInterface
        {
    private static int x;
    static void inc(){
        System.out.println("TestA inc");
        x++;
    }
}

class TestC extends TestA{
    static void inc(){
        System.out.println("Hide inc");
    }
}

class TestB //implements defaultInterface
         {
    private int x;
    void inc(){
        x++;
    }
}

public class Run{
    @Test
    public void TestA(){
//        TestA testA = new TestA();
//        testA.inc();
        //staticInterface testAInterface = testA;
        //testAInterface.inc();
        //staticInterface.class.cast(testA).inc();
        TestC x = new TestC();
        x.inc();
        TestA y = x;
        y.inc();
    }
}