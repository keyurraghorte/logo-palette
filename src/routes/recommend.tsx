import { createFileRoute } from '@tanstack/react-router';
import { MenuSense } from '@/components/MenuSense';
export const Route=createFileRoute('/recommend')({head:()=>({meta:[{title:'Find My Food | MenuSense'},{name:'description',content:'Tell MenuSense your preferences to find food that fits.'},{property:'og:title',content:'Find My Food | MenuSense'},{property:'og:description',content:'Tell MenuSense your preferences to find food that fits.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <MenuSense view="recommend"/>});
