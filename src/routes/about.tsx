import { createFileRoute } from '@tanstack/react-router';
import { MenuSense } from '@/components/MenuSense';
export const Route=createFileRoute('/about')({head:()=>({meta:[{title:'About | MenuSense'},{name:'description',content:'Learn about the MenuSense approach to thoughtful dining.'},{property:'og:title',content:'About | MenuSense'},{property:'og:description',content:'Learn about the MenuSense approach to thoughtful dining.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:()=> <MenuSense view="about"/>});
