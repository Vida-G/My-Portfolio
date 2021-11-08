
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core';

interface Props {
    title: string;
}

const useStyles = makeStyles({
    public: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
    }
});

export const Publications = (props: Props) => {
    const classes = useStyles();
    return (
        <div id="publications" className={classes.public}>
            <h2>Selected Publications</h2>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Large-Scale Dissipative and Passive Control Systems and the Role of Star and Cyclic Symmetries</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <a target="_blank" href="https://ieeexplore.ieee.org/document/7404243">Read the full paper</a>
                        <h4>Abstract:</h4>
                        In this paper, symmetries in large-scale dissipative and passive control systems are considered.
                        In the framework of dissipativity and passivity theory, stability conditions for large-scale systems are derived
                        by categorizing agents into symmetry groups and applying local control laws under limited interconnections with neighbors.
                        Building upon previous studies on stability of (Q,S,R)- dissipative large-scale systems,
                        we show that for cyclic and star-shaped symmetric systems there exists an upper bound on the number of subsystems that can be added to preserve stability of dissipative systems.
                        In cyclic and star-shaped symmetric systems, the subsystems can be heterogeneous as long as they satisfy the same dissipative inequalities.
                        Approximate symmetry with respect to interconnections is also considered and the robustness of the results is demonstrated.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Passivity-Based Iterative Learning Control for Cycling Induced by Functional Electrical Stimulation With Electric Motor Assistance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <a target="_blank" href="https://ieeexplore.ieee.org/document/8423783">Read the full paper</a>
                        <h4>Abstract:</h4>
                        This paper examines the use of a learning control method in a passivity-based framework to control a motorized cycle-rider system
                        with functional electrical stimulation (FES) of the quadriceps muscle groups. FES cycling with motorized assistance has been
                        used in the rehabilitation of people with neurological conditions. The concepts of adaptation and passivity are explored
                        to compensate for the uncertain nonlinear time-varying dynamics of the motorized FES cycle-rider system.
                        The system is modeled as a closed-loop feedback, state-dependent switched system such that in each cycle,
                        the quadriceps muscle groups produce the functional torque and the electric motor provides assistance as needed.
                        The output strictly passive feature of the closed-loop system is proven by considering a learning control input.
                        Then, an adaptive update law, based on iterative learning control, is developed to guarantee the convergence of the cadence tracking error.
                        Experimental results from seven able-bodied participants are presented and discussed to demonstrate the effectiveness of this approach.
                        The average cadence tracking error is 0.00 ± 2.47 rpm for the desired trajectory of 50 rpm.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Design of switched controllers using an enhanced passivation method</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <a target="_blank" href="https://ieeexplore.ieee.org/document/7963656">Read the full paper</a>
                        <h4>Abstract:</h4>
                        This paper studies an enhanced passivation method for feedback interconnected switched controllers consisting of N sub-controllers.
                        It is shown that stability and passivity of the closed-loop system are achieved through the feedback interconnection of the
                        passivated switched controller. The passivation technique is established through finding a common gain for the switched
                        controller and therefore the switched controller is passivated by a single input-output passivation matrix.
                        This approach significantly reduces the implementation cost for the design of switched controllers.
                        A design example is provided to verify the capability of the developed method.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>A passivation method for the design of switched controllers</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <a target="_blank" href="https://ieeexplore.ieee.org/document/7525140">Read the full paper</a>
                        <h4>Abstract:</h4>
                        We consider a feedback switched control system with non-passive subsystems.
                        Introducing a passivation matrix, we transform each non-passive subsystem into
                        a passive one and investigate the passivity of the resulting closed-loop system.
                        The results are further extended to input feedforward passive (IFP) and output
                        feedforward passive (OFP) switched controllers. In addition, we construct a control
                        framework to maintain passivity for switched systems and provide a numerical example
                        to illustrate the accuracy of the results based on the system performance.
                        Our theoretical framework can have important implications in the design of
                        switched controllers based on the concept of passivity.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>DOCTORAL DISSERTATION: Dissipativity/Passivity Based Control Design for Symmetric and Switched Systems with Application to Medical Robotics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <a target="_blank" href="https://curate.nd.edu/show/h415p843p2c">Read my dissertation</a>
                        <h4>Abstract:</h4>
                        This dissertation studies the concept of dissipativity and passivity, in theory, in practice, and in design of control systems.
                        To this end, the passivity-based approach is applied to the control of various types of challenging problems in
                        control systems such as symmetric systems, switched systems, and the automatic cycle-rider systems.
                        Dissipativity/passivity-based control approaches, referred to as energy-based control approaches,
                        play an important role in the analysis and synthesis of dynamical control systems.
                        In these approaches, the manner of energy exchange between different components of the system is analyzed.
                        In addition to the direct connection of the passivity and stability concepts, the passivity and dissipativity-based
                        approaches provide numerous advantages including conserved passivity of interconnected systems and
                        guaranteed stability of closed loop systems. This dissertation contains three major topics
                        all linked to the dissipativity/passivity concept.
                        The stability and dissipativity of multi-agent systems connected in different symmetry configurations
                        are studied from a theoretical point of view. The concept of symmetry is employed as a powerful tool to
                        overcome the complexity of multi-agent systems by reducing the number of multiple interconnections.
                        Both, stability conditions and passivity properties of cyclic and star-shaped symmetric systems are
                        explored.
                        In addition, we employ energy-based approaches using an enhanced passivation method in the design of
                        switched controllers to circumvent the challenges of traditional methods. Moreover, to guarantee the
                        desirable performance and stability for switched controllers, our approach provides new insights in
                        extending the notion of passivity to hybrid systems.
                        In practical applications, motion cycling system is considered. Combination of learnability and
                        passivity concepts are applied to the state-dependent switched cycle-rider system, induced by functional
                        electrical stimulation (FES) of lower muscles with the assistance of an electric motor.
                        The FES cycling exercise has therapeutic applications in the rehabilitation of people who suffer from
                        paraplegia due to the stroke, or spinal cord-injury. In this novel approach, the iterative
                        learning control (ILC) scheme is utilized which benefits from the passivity property of the closed-loop
                        dynamics to reject the nonlinearity and uncertainty of the dynamics and to achieve the desired tracking
                        performance after certain cycling trials.
                        Overall, this dissertation considers energy-based control methods to address both theoretical (symmetric and hybrid systems)
                        and practical (functional electrical stimulation) problems and makes important contributions to the stability and performance
                        of nonlinear control systems.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
