import pygame
import sys


def start_fake_vm():
    """Creates a fake 'virtual machine' using Pygame to simulate a fullscreen takeover."""

    pygame.init()

    # Set screen size to fullscreen
    screen = pygame.display.set_mode((0, 0), pygame.FULLSCREEN)
    pygame.display.set_caption("RedRoom - Virtual Machine")

    # Load a red background to enhance the creepy effect
    redroom_bg = pygame.Surface(screen.get_size())
    redroom_bg.fill((100, 0, 0))  # Dark red color

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False  # Quit VM when user closes it

        screen.blit(redroom_bg, (0, 0))  # Draw red background
        pygame.display.flip()  # Refresh screen

    pygame.quit()
    sys.exit()
