---
title: The green in your eyes
date: 2025-04-10
---

 **Proof by Induction**

The general universality proof follows from the special case of Boolean functions. It is proven by induction on :

Base case (): There are four possible functions:

Identity function – Implemented using a single wire.

Bit flip (NOT function) – Implemented using a single gate. $a^2 = \pi^2 +b^2$

Constant 0 function – Can be obtained by ANDing the input with an ancilla bit initially set to 0.

Constant 1 function – Can be obtained by ORing the input with an ancilla bit initially set to 1.

Inductive step: Suppose any function on bits can be computed by a circuit. For a function on bits, define two -bit functions: $$ f_1(x_1, ..., x_n) = f(1, x_1, ..., x_n) $$ $$ f_1(x_1, ..., x_n) = f(0, x_1, ..., x_n) $$
Since these are -bit functions, they can be computed using circuits by the inductive hypothesis.