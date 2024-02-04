import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import MechanicsMaterials from '@/components/application-scenarios/MechanicsMaterials.vue'
import SingularValueDecomposition from '@/components/application-scenarios/SingularValueDecomposition.vue'
import ContinuousElements from '@/components/finite-element/ContinuousElements.vue'
import DiscontinuousElements from '@/components/finite-element/DiscontinuousElements.vue'
import WeakFiniteElements from '@/components/finite-element/WeakFiniteElements.vue'
import MolecularDynamics from '@/components/particle-dynamics/MolecularDynamics.vue'
import CoarseParticleDynamics from '@/components/particle-dynamics/CoarseParticleDynamics.vue'
import ComputerVision from '@/components/machine-learning/ComputerVision.vue'
import ImageSegmentation from '@/components/machine-learning/computer-vision/ImageSegmentation.vue'
import NaturalLanguageProcessing from '@/components/machine-learning/NaturalLanguageProcessing.vue'
import ScientificComputing from '@/components/machine-learning/ScientificComputing.vue'
import PlatformRDTeam from '@/components/about-us/PlatformRDTeam.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/home', 
        component: Home
    },
    {
        path: '/application-scenarios',
        children: [
            { 
                path: 'mechanics-materials', 
                component: MechanicsMaterials
            },
            {
                path: 'singular-value-decomposition',
                component: SingularValueDecomposition
            },
        ]
    },
    {
        path: '/finite-element',
        children: [
            {
                path: 'continuous-elements',
                component: ContinuousElements
            },
            {
                path: 'discontinuous-elements',
                component: DiscontinuousElements
            },
            {
                path: 'weak-finite-elements',
                component: WeakFiniteElements
            },
        ]
    },
    {
        path: '/particle-dynamics',
        children: [
            {
                path: 'molecular-dynamics',
                component: MolecularDynamics
            },
            {
                path: 'coarse-particle-dynamics',
                component: CoarseParticleDynamics
            }
        ]
    },
    {
        path: '/machine-learning',
        children: [
            {
                path: 'computer-vision',
                component: ComputerVision
            },
            {
                path: 'computer-vision/image-segmentation',
                component: ImageSegmentation
            },
            {
                path: 'natural-language-processing',
                component: NaturalLanguageProcessing
            },
            {
                path: 'scientific-computing',
                component: ScientificComputing
            }
        ]
    },
    {
        path: '/data-mechanism',
        children: [

        ]
    },
    {
        path: '/about-us',
        children: [
            {
                path: 'platform-r-d-team',
                component: PlatformRDTeam
            }
        ]
    }
  ],
})
