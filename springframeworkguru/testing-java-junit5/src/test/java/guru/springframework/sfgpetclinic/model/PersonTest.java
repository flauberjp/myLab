package guru.springframework.sfgpetclinic.model;

import guru.springframework.sfgpetclinic.DisabledInterfaceTest;
import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class PersonTest implements DisabledInterfaceTest {



    @RepeatedTest(5)
    @Test
    void groupedAssertions(TestInfo testInfo) {
        System.out.printf("-----> " + testInfo.getDisplayName());
        Assumptions.assumeTrue("GURU".equalsIgnoreCase("Guru"));
        //given
        Person person = new Person(1L, "Flaviano", "Marinho");

        //then
        assertAll("Test Props Set",
                () -> assertEquals("Flaviano", person.getFirstName(), "first name prop does not match"),
                () -> assertEquals("Marinho", person.getLastName(), "last name comparison failed"));
    }

}