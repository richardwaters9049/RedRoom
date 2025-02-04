from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
import pygame
import threading

app = FastAPI()

# ✅ Enable CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ✅ Redirect root ("/") to "/start_vm"
@app.get("/")
def redirect_root():
    return RedirectResponse(url="/start_vm")


# Function to start the fake VM
def run_fake_vm():
    pygame.init()
    screen = pygame.display.set_mode((0, 0), pygame.FULLSCREEN)
    pygame.display.set_caption("Red Room OS")
    font = pygame.font.Font(None, 50)
    text = font.render("ACCESS GRANTED. WELCOME TO THE RED ROOM...", True, (255, 0, 0))

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        screen.fill((0, 0, 0))
        screen.blit(text, (100, 100))
        pygame.display.flip()


# ✅ Start the VM when requested
@app.get("/start_vm")
def start_vm():
    thread = threading.Thread(target=run_fake_vm)
    thread.start()
    return {"message": "Virtual Machine started"}
