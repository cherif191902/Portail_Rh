package tn.esprit.examen.nomPrenomClasseExamen.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/ws-notif")
@CrossOrigin(origins = "http://localhost:4200")
public class WebSocketController {

    @GetMapping("/info")
    public ResponseEntity<Map<String, Object>> getWebSocketInfo() {
        Map<String, Object> info = new HashMap<>();
        info.put("websocket_enabled", true);
        info.put("endpoint", "/ws-notif");
        info.put("status", "available");
        info.put("protocols", new String[]{"sockjs", "stomp"});
        
        return ResponseEntity.ok(info);
    }

    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("connected_users", 0);
        status.put("active_sessions", 0);
        status.put("server_time", System.currentTimeMillis());
        
        return ResponseEntity.ok(status);
    }
}
