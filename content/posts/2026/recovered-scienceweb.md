---
title: "The Great Canadian Hairy Star Party: Restoring a Science Project from 1996"
date: 2026-03-29
draft: false
tags: ["featured"]
categories: ["project"]
ShowToc: false
---

<div style="text-align:center"><a href="/recovered/scienceweb/ccs73.html"><img src="/img/2026/west.gif" width="120" style="margin: auto;">click for time travel</a></div>


## Background

*The Great Canadian Hairy Star Party* was an educational initiative produced by *ScienceWeb* in 1996. It featured observations, sketches, and other artwork from students across Canada related to Comet Hyakutake, a spectacular comet that passed close to Earth in March of that year. Centre Consolidated Elementary School in Lunenburg, Nova Scotia participated by having students submit their personal observations on a dedicated website.

I was one of those students. 

The servers hosting the original content were decommissioned in the early 2000s, and much of the data was lost. A few remnants of the effort remain in the following locations: 

- The project is mentioned on the [CM Bulletin Board](https://www.cmreviews.ca/cm/vol3/no14/bb14.html), *Volume III, Number 14 — March 14, 1997*.  
- Some partial snapshots can be found on the [Wayback Machine](https://web.archive.org/), but you need to know the exact URLs to find them, and some elements are either missing or corrupted. 
- The school launched a similar initiative for Comet Hale-Bopp in 1997 for which some of the content is still available on the [here](https://web.archive.org/web/19990210164909/http://www.scienceweb.org/astro/comet/halebopp/teach/cstudents.html) (with lots of broken links).

I recently successfully recovered the page and have hosted it at the link above for posterity. It is a nostalgic glimpse into the early days of the web, before the era of big social media and large language models, when the internet was a more personal and creative space for individuals to share their passions and projects.

## Restoration Process 

I attempted to preserve the original page as faithfully as possible. Here's the process I followed to recover it.

- I started with an old box of hard drives and USB sticks in my basement, vaguely recalling I had a copy of the original files somewhere. After some digging, I found an old hard drive labeled *“Travis very old Toshiba HD”*. I connected it to my computer using a SATA-to-USB adapter like this:

![Figure 1](/img/2026/sata.jpeg)  
**Figure 1.** This didn't work.

### corrupted drive 
- It didn’t work on my MacBook. Elena patiently allowed me to try on her Windows machines—no luck. I tried a few different adapters and cables, but the drive was not recognized by any of the machines. 
- I had partitioned that drive into two parts while in grad school (including a small Linux partition to run [ROS](https://www.ros.org/)), so I think that may have contributed to the issue.

### recovery 
- I was able to get power to the drive and recover the content using the [Cleverfiles Disk Drill](https://www.cleverfiles.com/disk-drill-windows.html) recovery tool. It took roughly three hours of rummaging through over 300 GB of partially organized data, but I eventually found the original files and most of the associated assets.
- Several image assets (mainly GIFs) were partially corrupted and could not be repaired.

### reconstruction
- Fortunately, the *.htm* file was intact, and I was able to extract the original URL: `http://www.scienceweb.org/astro/comet/kids/ccs73.html`.
- Having this URL allowed me to find older versions of the files on the [Wayback Machine](https://web.archive.org/) archive.
- One remaining asset (`west.gif`) was not available in the archive. Based on the filename and context, I found what I believe to be a copy of the original image [here](https://solarviews.com/thumb/comet/west.gif).
- I made only minor edits to the *.htm* file to enable hosting on my own server. 

## Result

The [result](/recovered/scienceweb/ccs73.html) is a near-faithful reconstruction of the original, very 90's style page.