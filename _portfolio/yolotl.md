---
title: "YOLOTL — Autonomous Driving"
excerpt: "1/5-scale autonomous ground vehicle achieving 2nd place among 26 international university teams. Features a custom BEV lane dataset, YOLOTL segmentation, and ROS1 Pure Pursuit control."
collection: portfolio
date: 2025-11-01
header:
  teaser:
tags:
  - PyTorch
  - YOLOTL
  - ROS1
  - Lane Segmentation
  - Autonomous Driving
---

**GitHub:** [Highsky7/YOLOTL](https://github.com/Highsky7/YOLOTL)
**Result:** 🥈 2nd Place — International Autonomous Driving Competition (26 universities)

---

## Overview

YOLOTL is an autonomous driving system built for a competitive 1/5-scale electric vehicle platform. As Autonomous Driving Team Lead at Dolbot, I led the design and implementation of the full software stack — from data collection and model training to real-time deployment and vehicle control.

The system competed against teams from **26 international universities** and achieved **2nd place**.

---

## Key Contributions

### Dataset — Custom BEV Lane Dataset
- Collected and annotated a **Bird's-Eye View (BEV) lane segmentation dataset** tailored to the competition track
- Addressed domain shift between simulation and the physical environment through targeted data augmentation

### Perception — YOLOTL Segmentation Model
- Trained and deployed the **YOLOTL** segmentation architecture for real-time lane detection on embedded hardware
- Optimized inference for the target compute budget while maintaining accuracy under diverse lighting conditions

### Planning & Control — ROS1 Path Generation & Pure Pursuit
- Implemented a **ROS1**-based path generation module that converts segmentation masks to drivable trajectories
- Applied **Pure Pursuit** lateral control with velocity-adaptive look-ahead distance for smooth lane following

---

## Technical Stack

| Category | Technologies |
|----------|-------------|
| Vision | YOLOTL (segmentation) |
| Dataset | Custom BEV lane dataset |
| Robotics | ROS1, Python |
| Control | Pure Pursuit lateral control |
| ML Framework | PyTorch |
| Platform | 1/5-scale EV |

---

## Results

- **2nd Place** out of 26 international university teams in an autonomous driving competition
