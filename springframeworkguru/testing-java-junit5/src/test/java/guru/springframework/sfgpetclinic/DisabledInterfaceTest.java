package guru.springframework.sfgpetclinic;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestInstance;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public interface DisabledInterfaceTest {

    @BeforeAll
    default void beforeAll() {
        System.out.printf("Before All method...");
    }
}
