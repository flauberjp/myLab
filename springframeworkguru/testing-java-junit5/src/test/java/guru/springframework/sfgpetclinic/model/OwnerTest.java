package guru.springframework.sfgpetclinic.model;

import guru.springframework.sfgpetclinic.DisabledInterfaceTest;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

@Tag("disabled")
class OwnerTest implements DisabledInterfaceTest {



    @Test
    void dependentAssertions() {
        fail();
    }
}