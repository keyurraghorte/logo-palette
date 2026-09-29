import { createFileRoute } from '@tanstack/react-router';
import { MenuSense } from '@/components/MenuSense';
export const Route=createFileRoute('/dashboard')({head:()=>({meta:[{title:'Your Space | MenuSense'},{name:'description',content:'Your saved dishes, preferences, and recent discoveries.'},{property:'og:title',content:'Your Space | MenuSense'},{property:'og:description',content:'Your saved dishes, preferences, and recent discoveries.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <MenuSense view="dashboard"/>});
