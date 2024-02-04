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
        path: '/application-scenarios/mechanics-materials', 
        component: MechanicsMaterials
    },
    {
        path: '/application-scenarios/singular-value-decomposition',
        component: SingularValueDecomposition
    },
    {
        path: '/finite-element/continuous-elements',
        component: ContinuousElements
    },
    {
        path: '/finite-element/discontinuous-elements',
        component: DiscontinuousElements
    },
    {
        path: '/finite-element/weak-finite-elements',
        component: WeakFiniteElements
    },
    {
        path: '/particle-dynamics/molecular-dynamics',
        component: MolecularDynamics
    },
    {
        path: '/particle-dynamics/coarse-particle-dynamics',
        component: CoarseParticleDynamics
    },
    {
        path: '/machine-learning/computer-vision',
        component: ComputerVision
    },
    {
        path: '/machine-learning/natural-language-processing',
        component: NaturalLanguageProcessing
    },
    {
        path: '/machine-learning/scientific-computing',
        component: ScientificComputing
    },
    {
        path: '/about-us/platform-r-d-team',
        component: PlatformRDTeam
    }
  ],
})
