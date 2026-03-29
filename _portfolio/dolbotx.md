---
title: "DolbotX — National Defense Robot"
excerpt: "Award-winning autonomous combat robot for the 2025 Army Chief of Staff Cup. Achieved 2nd place (Hanwha National Defense Award) using YOLOv8-based perception and ROS2-driven manipulation."
collection: portfolio
date: 2025-09-01
header:
  teaser:
tags:
  - PyTorch
  - YOLOv8
  - ONNX
  - ROS2
  - Robotics
---

**GitHub:** [Highsky7/DolbotX](https://github.com/Highsky7/DolbotX)
**Award:** 🥈 Hanwha National Defense Award — 2nd Place, 2025 Army Chief of Staff Cup

---

## Overview

DolbotX is an autonomous ground robot developed for the **2025 Army Chief of Staff Cup National Defense Robot Competition**. As Software Team Lead, I was responsible for the full perception-to-control software stack, from training the vision models to integrating the ROS2 pipeline on the physical robot.

---

## Key Contributions

### Perception — Custom YOLOv8 Object Detection
- Collected and annotated a domain-specific dataset for competition obstacles and targets
- Fine-tuned a **YOLOv8** model achieving robust real-time detection under varying lighting conditions
- Developed a **driving area segmentation** module to determine safe traversal regions

### Optimization — ONNX Export & Deployment
- Exported trained models to **ONNX** format for hardware-accelerated inference on the embedded compute unit
- Achieved target latency for real-time closed-loop operation

### Control — ROS2 Manipulator Pipeline
- Built the complete **ROS2**-based software stack covering perception, task planning, and manipulator control
- Integrated perception outputs with a finite-state machine for autonomous task execution

---

## Technical Stack

| Category | Technologies |
|----------|-------------|
| Vision | YOLOv8 (Ultralytics), Custom segmentation |
| Optimization | ONNX Runtime |
| Robotics | ROS2, Python |
| ML Framework | PyTorch |
| Hardware | Embedded compute (on-board) |

---

## Results

- **Hanwha National Defense Award — 2nd Place** at the 2025 Army Chief of Staff Cup National Defense Robot Competition
