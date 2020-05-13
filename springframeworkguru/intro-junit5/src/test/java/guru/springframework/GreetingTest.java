package guru.springframework;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class GreetingTest {

    Greeting greeting;

    @BeforeAll
    static void beforeAll() {
        System.out.printf("Before all - Called only once!!!!!");
    }

    @BeforeEach
    void setUp() {
        System.out.println("In before each...");
        greeting = new Greeting();
    }

    @Test
    void helloWorld() {
        System.out.println(greeting.helloWorld());
    }

    @Test
    void testHelloWorld() {
        System.out.println(greeting.helloWorld("flauber"));
    }

    @AfterEach
    void tearDown() {
        System.out.printf("In After Each...");
    }

    @AfterAll
    static void afterAll() {
        System.out.printf("In After All - called only once!!!!");
    }
}