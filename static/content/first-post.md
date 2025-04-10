---
title: Chapter 3 - Introduction to Computer Science
date: 2025-04-10
---

## Why should we study Classical Computer while Investigating Quantum Information and computation

1. Many algorithms and techniques used in classical computation can be used in a great effect in quantum computing. For example classical computers can calculate Fourier transformations and is a widely used technique with many use cases, which can be calculated much faster in a quantum computer which helps to create many quantum algorithms
2. Classical computer scientists have expended great effort understanding the resource utilization for a given problem which can be used to compare quantum computation efficiency. For example there is no efficient solution finding prime factors for a given number, but there is one for quantum computers
3. To think like a computer scientist

## Models used in this chapter for the understanding of classical computers
Two models
1. **Turing Model**
2. **Circuit Model**

#### 1. Turing Model

The **Turing Model** refers to a computational model proposed by **Alan Turing** in 1936, which serves as the foundation of modern computer science. It describes an abstract machine, known as a **Turing Machine**, capable of simulating any algorithmic computation.

### Key Components of a Turing Machine
1. **Infinite Tape** - A sequence of cells that can hold symbols and extend infinitely in both directions.
2. **Head (Read-Write)** - Moves left or right, reading and writing symbols on the tape.
3. **Finite Control (State Machine)** - Governs the machine's operations based on a set of rules.
4. **Transition Function** - Defines state transitions based on the current state and tape symbol.

## Importance of the Turing Model
- **Foundation of Computability Theory**: Determines what problems can be solved algorithmically.
- **Church-Turing Thesis**: Suggests that any effective computation can be performed by a Turing Machine.
- **Turing Completeness**: A system is Turing complete if it can simulate a Turing Machine, meaning it can execute any computable function.

## Applications
- **Computer Science**: Basis for modern programming languages and algorithms.
- **Artificial Intelligence**: Used in discussions about machine intelligence (e.g., Turing Test).
- **Cryptography**: Influences computational security models.

## Limitations
- **Halting Problem**: Turing proved that it's impossible to create a general algorithm that decides whether any arbitrary program halts or runs indefinitely.
- **Physical Constraints**: A real-world implementation cannot have infinite memory.

## Conclusion
The Turing Model remains a crucial concept in theoretical computer science, shaping our understanding of computation and influencing various technological advancements.

> [!Note]
> The class of functions computable by a Turing machine is the exact class of function that we label as computable by an algorithm

#### 2. Circuit Model


##### Fan-Out Gate
In circuits, we often allow bits to ‘divide’, replacing a bit with two copies of itself. This operation is referred to as **fan-out**.

##### Swap/Crossover Gate
We also allow bits to **swap**, meaning the values of two bits are interchanged.

##### Ancilla or Work Bits
not really a logic gate, is the ability to prepare extra **ancilla** or **work bits**. These are additional bits introduced to provide extra working space during computation.

These missing elements play a crucial role in circuit design, enabling efficient computation and logical operations.

##### **Universality of Boolean Circuits**

A Boolean function is a function that takes binary inputs and produces a binary output. The corresponding circuit is called a Boolean circuit.

**Proof by Induction**

The general universality proof follows from the special case of Boolean functions. It is proven by induction on :

Base case (): There are four possible functions:

Identity function – Implemented using a single wire.

Bit flip (NOT function) – Implemented using a single gate.

Constant 0 function – Can be obtained by ANDing the input with an ancilla bit initially set to 0.

Constant 1 function – Can be obtained by ORing the input with an ancilla bit initially set to 1.

Inductive step: Suppose any function on bits can be computed by a circuit. For a function on bits, define two -bit functions: $$ f_1(x_1, ..., x_n) = f(1, x_1, ..., x_n) $$ $$ f_1(x_1, ..., x_n) = f(0, x_1, ..., x_n) $$
Since these are -bit functions, they can be computed using circuits by the inductive hypothesis.

A circuit for can then be designed by computing both and, and using a multiplexer-like operation to select the output based on the first bit of input.

These elements and the induction proof form the foundation of Boolean circuit universality, ensuring that any Boolean function can be computed using a finite circuit

# The analysis of computational problems
The analysis of computational problems depends upon the answer to three fundamental questions :
1. **What is a computational problem?**
2. **How may we design algorithms to solve a given computational problem?**
3. **What are the minimum resources required to solve a given computational problem?**
## How to quantify computational resources?

Basically Talks about asymptotic notation. How it quantifies the time step required to run an algorithm.

## Computational complexity

>[!quotes]
>"The idea that there won't be an algorithm to solve - this is something fundamental that won't even change - that idea appeals to me."
>-** Stephen Cook**
>
>" Sometimes its good that somethings are impossible. I am happy there are many things that nobody can do to me."
>-** Leonid Levin**


>[!notes]
>**Chunch-Turing Thesis: **
>Any computational model can be simulated in a probabilistic Turing machine with at most  a polynomial increase in the number of elementary operations required.```


