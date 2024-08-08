# IT Equipment Management System

## Project Context
As a full stack Java/Angular developer at ITSolutions, you are tasked with designing and developing an IT Equipment Management System. The system aims to streamline the management of IT equipment, track issues, and support requests, and generate insightful reports.

## System Functionality
- An **Equipment** can be associated with multiple **Issues**. Each time an issue is detected or reported, a new entry is created in the **Issue** entity, linked to the relevant equipment, allowing for tracking of all issues related to a particular item.
- The **Issue History** keeps a detailed record of all past issues for each piece of equipment, linking each entry to an **Equipment** for comprehensive tracking of problems and repairs.
- **Support Tickets** are created by **Users** when they encounter issues with equipment. Each ticket is linked to a specific user, enabling effective tracking of who reported the issue and maintaining clear communication.
- Once a **Support Ticket** is created, it is assigned to a **Technician** for resolution, allowing for tracking of which technician is responsible for solving the problem and evaluating technicians' performance based on resolved tickets.
- The system also supports **report generation**, including information on **Equipment**, **Issues**, and **Support Tickets**. Reports are essential for assessing equipment status, frequency and nature of issues, and the performance of technicians and the support service.

## Technologies Used
- **Backend:** Spring Boot, Spring Data JPA, Spring Security
- **Frontend:** Angular 16
- **Database:** PostgreSQL / MySQL
- **Unit Testing:** JUnit
- **Containerization:** Docker
