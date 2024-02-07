package com.dashnet.dashNet.Security;

import com.dashnet.dashNet.User.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UserDetails;

import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

public class JwtUtils {
	private JwtUtils() {}
	private static final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
	private static final int MINUTES = 60;

	public static String generateToken(String email) {
		Instant now = Instant.now();
		return Jwts.builder()
			.setSubject(email)
			.setIssuedAt(Date.from(now))
			.setExpiration(Date.from(now.plus(MINUTES, ChronoUnit.MINUTES)))
			.signWith(SECRET_KEY)
			.compact();
	}

	public static String getEmail(String token) {
		return getTokenBody(token).getSubject();
	}
	public static Boolean validateToken(String token, UserDetails userDetails) {
		final String email = getEmail(token);
		return email.equals(userDetails.getUsername()) && !isTokenExpired(token);
	}

	private static Claims getTokenBody(String token) {
		try {
			return Jwts
				.parserBuilder()
				.setSigningKey(SECRET_KEY)
				.build()
				.parseClaimsJws(token)
				.getBody();
		} catch (SignatureException | ExpiredJwtException e) {
			throw new AccessDeniedException("Access denied: " + e.getMessage());
		}
	}

	private static boolean isTokenExpired(String token) {
		Claims claims = getTokenBody(token);
		return claims.getExpiration().before(new Date());
	}
}
