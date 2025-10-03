package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {

    @GetMapping("/public")
    public ResponseEntity<String> publicEndpoint() {
        return ResponseEntity.ok("Public endpoint - no authentication required");
    }

    @GetMapping("/user")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN') or hasRole('RH') or hasRole('CHEF_SERVICE')")
    public ResponseEntity<String> userEndpoint() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
        String authorities = auth.getAuthorities().toString();
        
        return ResponseEntity.ok(String.format(
            "User endpoint - Authenticated as: %s with authorities: %s", 
            username, authorities
        ));
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> adminEndpoint() {
        return ResponseEntity.ok("Admin endpoint - admin access required");
    }

    @GetMapping("/auth-info")
    public ResponseEntity<Object> getAuthInfo() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        if (auth == null) {
            return ResponseEntity.ok("No authentication found");
        }
        
        return ResponseEntity.ok(new Object() {
            public String name = auth.getName();
            public String authorities = auth.getAuthorities().toString();
            public boolean authenticated = auth.isAuthenticated();
            public String principal = auth.getPrincipal().toString();
        });
    }
}
