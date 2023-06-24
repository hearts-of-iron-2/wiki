---
title: Modding_in-game_music
---
 **Like all modding, please backup all files before modifying anything**

Modifying the playlist for the in-game music played for HoI2 is not only easy, but very quick.

After opening the music subfolder, there are a dozen or so mp3 files along with three .txt files: looby.txt; peace.txt; and war.txt. These are you "playlists" for lack of a better term. Without editing these files, no matter what mp3s you add to the music subfolder, HoI2 will not play them.

So, lets say we want to add Tchaikovsky's War of 1812 to the soundtrack. Take that mp3 and copy/move it into the mp3 folder. Now, for ease of use, rename it to something like "1812.mp3" or "tchaikovsky1812.mp3." Why? Remember those three playlists I mentioned? They are text files. And since HoI2 reads whitespace (read: spaces and tabs) as an indication to mvoe forward, having it named "Tchaisovsky 1812.mp3" won't work. Why? Let me explain in the next step.

Now, we want to HoI2 to load this song up when we are loading the game instead of the normal start-up music. Yes, you can do this. Open up lobby.txt. You should see only one line of text "hoi2-overture". This is the playlist for music while loading before the title screen and for the main menu. Now add "1812" on the next line. Now, if you save this file and load up HoI2, and wait for the Overture to stop, you'll notice that the War of 1812 is playing. The order of which the tracks list in the text document is the order that they are played in. Makes sense, right?

So now, lets look at the war.txt and peace.txt. Wonder when those get played? (Please tell me you do).

But, you want to add a song that is you just think is the epidomy of war songs- Carmina Burana. So we move it into the music folder, rename it "carmina.mp3" for good measure, and open up war.txt. Add it to the top line (so it is first in the queue). Now, any time you go to war, this will be the first song played in the playlist.

So that's adding music to the playlist. Removing things is just as easy. Simply remove the files's name from the playlist.