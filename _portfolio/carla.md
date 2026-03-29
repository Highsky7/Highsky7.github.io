---
title: "CARLA Base Controller"
excerpt: "Graduation research project implementing a full vehicle controller in the CARLA simulator. Combines PID longitudinal control and Pure Pursuit lateral control via a ROS1–CARLA bridge."
collection: portfolio
date: 2025-06-01
header:
  teaser:
tags:
  - CARLA
  - ROS1
  - PID
  - Pure Pursuit
  - Control Systems
---

**GitHub:** [Highsky7/CARLA_Base_Controller](https://github.com/Highsky7/CARLA_Base_Controller)
**Context:** B.S. Graduation Research Project

---

## Overview

CARLA Base Controller is a vehicle autonomy framework built on top of the [CARLA open-source simulator](https://carla.org/) with a ROS1 bridge. The project focuses on establishing a reliable closed-loop vehicle control baseline that can be extended with higher-level perception and planning modules.

---

## Key Contributions

### Integration — CARLA + ROS1 Bridge
- Set up the **CARLA–ROS1 bridge** to synchronize simulation state (sensors, odometry, control commands) with the ROS topic/service ecosystem
- Enabled modular development: perception, planning, and control nodes communicate via standard ROS messages

### Longitudinal Control — PID Controller
- Implemented a **PID controller** for throttle and braking commands
- Tuned gains for smooth speed tracking across varying road gradients and curvatures

### Lateral Control — Pure Pursuit
- Designed a **Pure Pursuit** path-tracking controller with adaptive look-ahead distance
- Validated lane-keeping performance on CARLA's built-in map scenarios

---

## Technical Stack

| Category | Technologies |
|----------|-------------|
| Simulator | CARLA |
| Middleware | ROS1 (CARLA–ROS bridge) |
| Longitudinal Control | PID |
| Lateral Control | Pure Pursuit |
| Language | Python |

---

## Outcomes

- Established a reusable autonomous vehicle control baseline in CARLA
- Demonstrated stable closed-loop driving on standard CARLA town maps
- Served as the foundation for further research into perception-integrated autonomy
