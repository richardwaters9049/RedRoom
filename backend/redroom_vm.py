import pygame
import sys

pygame.init()
WIDTH, HEIGHT = pygame.display.Info().current_w, pygame.display.Info().current_h
screen = pygame.display.set_mode((WIDTH, HEIGHT), pygame.FULLSCREEN)

font = pygame.font.Font(None, 36)
text = font.render("BOOTING RED ROOM OS...", True, (255, 0, 0))

while True:
    screen.fill((0, 0, 0))
    screen.blit(text, (WIDTH // 3, HEIGHT // 2))
    pygame.display.flip()

    for event in pygame.event.get():
        if event.type == pygame.QUIT or event.type == pygame.KEYDOWN:
            pygame.quit()
            sys.exit()
