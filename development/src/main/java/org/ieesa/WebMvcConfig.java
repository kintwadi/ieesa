package org.ieesa;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
@EnableWebMvc
public class WebMvcConfig implements WebMvcConfigurer {
	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/assets").setCachePeriod(3600)
				.resourceChain(true).addResolver(new PathResourceResolver());
	}

	@Override
	public void addCorsMappings(final CorsRegistry registry) {
		registry.addMapping("/**").
		allowedMethods("POST", "GET").
		allowedHeaders("*").
		allowedOrigins("http://localhost:8080");
				
			
	}

}