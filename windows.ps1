Write-Output "Hello, Script is being executed"
New-Item -Path . -Name "testfile1.txt" -ItemType "file" -Value "This is a text string."
Start-Sleep -s 5