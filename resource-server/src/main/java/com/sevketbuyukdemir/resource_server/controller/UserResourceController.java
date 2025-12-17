package com.sevketbuyukdemir.resource_server.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user-resources", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class UserResourceController {

    @GetMapping("/secret-resource")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<String> first(Authentication authentication, HttpServletRequest request) {
        return new ResponseEntity<>("SECRET USER RESOURCE", HttpStatus.OK);
    }

}