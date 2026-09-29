import { createFileRoute } from '@tanstack/react-router';
import { MenuSense } from '@/components/MenuSense';
export const Route=createFileRoute('/terms')({head:()=>({meta:[{title:'Terms | MenuSense'},{name:'description',content:'Read the MenuSense terms of use and allergy guidance.'},{property:'og:title',content:'Terms | MenuSense'},{property:'og:description',content:'Read the MenuSense terms of use and allergy guidance.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <MenuSense view="terms"/>});
