from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import threading
from redroom_vm import start_fake_vm

# Initialize FastAPI app
app = FastAPI()

# Enable CORS (Allows frontend to communicate with the backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to the frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Route to start the virtual machine (Triggered when "Play" is clicked)
@app.get("/start_vm")
async def start_vm():
    threading.Thread(target=start_fake_vm).start()
    return {"message": "Virtual Machine is starting..."}


# Root endpoint
@app.get("/")
async def root():
    return {"message": "RedRoom Backend is Running"}
