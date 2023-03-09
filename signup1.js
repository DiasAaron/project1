const form = document.getElementById('signup-form');
const username = form.elements.username;
const email = form.elements.email;
const password = form.elements.password;
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Reset error messages
  usernameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  // Validate
}
public interface UserRepository extends JpaRepository<User, Long> {

}
@Autowired
private UserRepository userRepository;

@PostMapping("/signup")
public String signup(@RequestParam String username, @RequestParam String email, @RequestParam String password) {
  User user = new User();
  user.setUsername(username);
  user.setEmail(email);
  user.setPassword(password);
  userRepository.save(user);
  return "redirect:/login";
}
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;
    //getters and setters
}
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=create-drop