@echo off
echo ===================================================
echo KEKS AMMAN - Copying & Renaming Luxury Image Assets
echo ===================================================
if exist "Keks3.png .png" (
    echo Renaming "Keks3.png .png" to "Keks3.png"...
    rename "Keks3.png .png" "Keks3.png"
)
copy /Y "C:\Users\MCC\.gemini\antigravity\brain\5fcc9c14-45ce-41ba-af7c-f8d85095a94e\media__1779644366036.png" "CakeBoard.png"
copy /Y "C:\Users\MCC\.gemini\antigravity\brain\5fcc9c14-45ce-41ba-af7c-f8d85095a94e\media__1779644382342.jpg" "PistachioCheesecake.jpg"
copy /Y "C:\Users\MCC\.gemini\antigravity\brain\5fcc9c14-45ce-41ba-af7c-f8d85095a94e\media__1779644415956.png" "MothersCake.png"
copy /Y "C:\Users\MCC\.gemini\antigravity\brain\5fcc9c14-45ce-41ba-af7c-f8d85095a94e\media__1779644451651.png" "StuffedCookies.png"
copy /Y "C:\Users\MCC\.gemini\antigravity\brain\5fcc9c14-45ce-41ba-af7c-f8d85095a94e\media__1779644466479.png" "PistachioTart.png"
echo ===================================================
echo Image assets copied and renamed successfully!
echo ===================================================
pause
