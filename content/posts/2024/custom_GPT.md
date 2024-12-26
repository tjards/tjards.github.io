---
date: '2024-12-25T18:43:18-05:00'
draft: false
title: 'Co-doc: A Custom GPT Research Assistant'
tags: ["featured", "ai"]
categories: ["general"]
---

## Key Points

1. Built a custom ChatGPT to assist me with my research. 
2. Trained it on actual comments from peer-review.
3. Received feedback on my proposed revisions.
4. Overall impressed with its initial performance.

## Introduction

One of my holiday projects this year was to play with some of the special features that come with the [OpenAI ChatGPT](https://chatgpt.com/) *Plus* account. In additon to gaining access to better models and more reliable performance, the *Plus* account allows you to create your own custom GPTs, tailored to your own needs. 

So I decided to create a custom GPT to serve as a Research Assistant. This "Co-doc" would assist me in conducting literature reviews, formulating new research ideas, prototyping, designing experiments, running experiments, collecting data, analyzing data, drawing insights and conclusions, and reporting results. 

I trained it on a very narrow band of my swarming research and tested it on actual peer-review feedback for one my papers. In order to not contaminate the actual peer-review process, I tested it on historical, already-accepted material. 

## Train

Here are the steps I followed to setup my custom GPT.

1. Go to https://chatgpt.com/, setup and account, and pay for the Plus subscription.

2. At the top-left corner, select "Explore GPTs".

<figure>
  <img src="/img/2024/custom_GPT/step1.png" alt="" style="width: 200px; height: auto">
  <figcaption>Select "Explore GPTs".</figcaption>
</figure>

3. At the top-right corner, select "+Create".

<figure>
  <img src="/img/2024/custom_GPT/step2.png" alt="" style="width: 200px; height: auto">
  <figcaption>Select "+Create".</figcaption>
</figure>

4. Next, we will give some instructions to the GPT. Later, you will train it on custom material. However, this is where you tell it what to do with what it knows. You will have to experiment with this to get the behaviour you want.   

<figure>
  <img src="/img/2024/custom_GPT/step3.png" alt="" style="width: 400px; height: auto">
  <figcaption>Give some instructions to the GPT.</figcaption>
</figure>

5. You can provide some default conversation starters. I did not find these particularly useful, but I am sure there is lots of room to fine-tune these.

<figure>
  <img src="/img/2024/custom_GPT/step4.png" alt="" style="width: 400px; height: auto">
  <figcaption>Define some conversation starters.</figcaption>
</figure>

6. Here is where the GPT trains on your unique problems. You may upload documents as shown below. Here, I provided some of my draft papers at various stages of peer-review and the reviewer comments. I also provided some of my other related papers. 

<figure>
  <img src="/img/2024/custom_GPT/step5.png" alt="" style="width: 400px; height: auto">
  <figcaption>Train it on your custom materials.</figcaption>
</figure>

7. You can define which capabilities it has access to. You can also define custom Actions; I did not play with these much, but it appears to permit access to all kinds of interesting things like webscraping, custom API's, ... etc. I suspect there will be much to explore in here later.

<figure>
  <img src="/img/2024/custom_GPT/step6.png" alt="" style="width: 400px; height: auto">
  <figcaption>Define the GPT capabilities and custom Actions.</figcaption>
</figure>

8. Select "Create" and start playing. 

## Validate

I carried out a number of tests to validate it understood the core material. As this went into considerable depth about the technical content of the papers, I have not provided the detailed conversation here. Throughout the conversation, however, I was able provide extracts of *python* code and the *.tex* files, in order to determine if it understood the various concepts at play. I was pleasantly suprised with its performance.

## Assist

Then I asked it to assist me. Again, I have left out quite a bit of the conversation, but here are some representative examples of it assisting me. Some details intentionally redacted.

### Feedback on Revisions

I asked it whether I addressed all of the reviewer comments in my latest revision. It provided a breakdown, by reviewer, with detailed feedback. It also provided a more global assessment.  

<figure>
  <img src="/img/2024/custom_GPT/test_1.png" alt="" style="width: 500px; height: auto">
  <figcaption>Reviewer-specific feedback.</figcaption>
</figure>

<figure>
  <img src="/img/2024/custom_GPT/test_2.png" alt="" style="width: 500px; height: auto">
  <figcaption>Global assessment.</figcaption>
</figure>

### Recommended Improvements

It also provided some areas for improvement, should I choose to further refine the paper. I didn't follow these, but it was interesting to see it trying to identify gaps and predict what might better satisfy the reviewers.

<figure>
  <img src="/img/2024/custom_GPT/test_3.png" alt="" style="width: 500px; height: auto">
  <figcaption>Recommended improvements.</figcaption>
</figure>

## Overall Impression

The process for creating and training a custom GPT was simple and offered decent flexibilty. I did not leverage the full scope of capabilities, however. While uploading documents through the GUI was convenient, I feel I could get a lot more from the custom Actions and APIs (with an associated investment in time). 

I used a very narrow use-case and asked fairly superficial questions. That said, I was impressed with how well it understood the (fairly dense) material and offered reasonable advice on what areas to focus on in developing the paper. 

Overall, I see potential for Co-doc to be a useful complement to the tools I use in my research. I plan to further refine its instructions and training set, as well as ask it tougher questions in the future.