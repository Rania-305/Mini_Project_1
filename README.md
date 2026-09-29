# Mini_Project_1

- Client Name: Nabeel Ishoof
- Site Purpose: To serve as a landing page for potential business partners and guests who are interested in the podcast
- Live link: https://rania-305.github.io/Mini_Project_1/index.html

Required Question - Pick one piece of AI output you did not accept as-is. What did it give you, what did you change, and how did you know it needed changing? Point at the commit.

If the agent produced acceptable output on the first attempt: what did you do to verify it?

- One piece of AI output that I could not accept as-is was the positioning of the images for the "Guests" page. The images were being positioned in a manner that cropped the top of them off, so I became frustrated with the results. Once I realized that continuing to query they AI wouldn't work, I managed to find the lines in the style.css sheet that dictates the images' positions. I then manually input more specific coordinates into the line of code. In style.css, this was line 456 which I changed to be written as "object-position: center calc(50% + 250px);" The 250 px specificity was key in achieving the desired look for my images.
- If an agent produced acceptable output on the first attempt, I always made sure to navigate to where the AI agent proposed the code changes. From there, I double-checked that the code more or less made sense to me as a beginner and would sometimes ask in the Claude Desktop LLM if the code made sense by copying and pasting it. This way, I was able to cross-check and verify that the changes would be positive without risking messing up my code too much beforehand.