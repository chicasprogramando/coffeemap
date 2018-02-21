<template>
<div :class="$style.containerloader">
<svg :class="$style.rings" width="300" height="300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(2 1)" stroke="#FFF" stroke-width="0.3">
            <circle cx="42.601" cy="11.462" r="5" fill-opacity="1" fill="#7971D9">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="1;0;0;0;0;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="49.063" cy="27.063" r="5" fill-opacity="0" fill="#7971D9">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;1;0;0;0;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="42.601" cy="42.663" r="5" fill-opacity="0" fill="#7971D9">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;1;0;0;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="49.125" r="5" fill-opacity="0" fill="#7971D9">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;1;0;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="11.399" cy="42.663" r="5" fill-opacity="0" fill="#7971D9">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;0;1;0;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="4.938" cy="27.063" r="5" fill-opacity="0" fill="#7971D9">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;0;0;1;0;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="11.399" cy="11.462" r="5" fill-opacity="0" fill="#7971D9">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;0;0;0;1;0" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="5" r="5" fill-opacity="0" fill="#7971D9">
                <animate attributeName="fill-opacity"
                     begin="0s" dur="1.3s"
                     values="0;0;0;0;0;0;0;1" calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>

    <svg :class="$style.coffeeicon" width="50" height="50" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
<path style="fill:#F6E27D;" d="M186.181,186.182c-12.853,0-23.273-10.42-23.273-23.273c0-13.082-5.046-18.679-16.457-30.09
	c-12.701-12.698-30.093-30.089-30.089-63.003c-0.005-32.908,17.391-50.302,30.092-63.001c9.089-9.086,23.825-9.089,32.914,0.002
	c9.087,9.089,9.087,23.822-0.002,32.911c-11.413,11.413-16.459,17.009-16.457,30.089c-0.002,13.082,5.042,18.679,16.452,30.087
	c12.701,12.699,30.093,30.092,30.093,63.006C209.454,175.762,199.034,186.182,186.181,186.182z"/>
<path style="fill:#F2D23D;" d="M294.788,186.182c-12.853,0-23.273-10.42-23.273-23.273c0-13.082-5.046-18.679-16.457-30.09
	c-12.701-12.698-30.092-30.089-30.089-63.003c-0.005-32.908,17.391-50.302,30.092-63.001c9.087-9.086,23.825-9.089,32.914,0.002
	c9.087,9.089,9.087,23.822-0.002,32.911c-11.413,11.413-16.459,17.009-16.457,30.089c-0.002,13.082,5.042,18.679,16.452,30.087
	c12.701,12.699,30.093,30.092,30.093,63.006C318.061,175.762,307.641,186.182,294.788,186.182z"/>
<path style="fill:#8F8AD9;" d="M488.728,318.059c0-47.052-38.281-85.331-85.334-85.331h-31.031H62.059
	c-12.853,0-23.273,10.418-23.273,23.273v77.573c0,98.385,80.042,178.425,178.425,178.425c73.618,0,136.964-44.819,164.19-108.604
	h21.993c0.022,0,0.039-0.003,0.06-0.003C450.48,403.36,488.728,365.093,488.728,318.059z M403.395,356.847
	c-0.011,0-0.02,0.003-0.031,0.003h-9.246c0.998-7.62,1.519-15.388,1.519-23.276v-54.3h7.758c21.388,0,38.788,17.399,38.788,38.785
	C442.183,339.448,424.782,356.847,403.395,356.847z"/>
<path style="fill:#7971D9;" d="M403.395,232.728h-31.031H217.212v279.271c73.618,0,136.964-44.819,164.19-108.604h21.993
	c0.022,0,0.039-0.003,0.06-0.003c47.025-0.034,85.273-38.301,85.273-85.334C488.728,271.007,450.448,232.728,403.395,232.728z
	 M403.395,356.847c-0.011,0-0.02,0.003-0.031,0.003h-9.246c0.998-7.62,1.519-15.388,1.519-23.276v-54.3h7.758
	c21.388,0,38.788,17.399,38.788,38.785C442.183,339.448,424.782,356.847,403.395,356.847z"/>
<path style="fill:#5D57D9;" d="M387.879,465.454H46.544c-12.853,0-23.273,10.422-23.273,23.273c0,12.854,10.42,23.273,23.273,23.273
	h341.335c12.853,0,23.273-10.418,23.273-23.273C411.152,475.875,400.732,465.454,387.879,465.454z"/>
<path style="fill:#4C469B;" d="M387.879,465.454H217.212v46.546h170.668c12.853,0,23.273-10.418,23.273-23.273
	C411.152,475.875,400.732,465.454,387.879,465.454z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

</div>
  
</template>
<script>
export default {
  name: 'Loader1',  
}
</script>
<style module>
.containerloader{
    position:relative;
    width:300px;
    height: 300px;
}
.rings{
     position:absolute;
     top:50%;
     left:50%;
     margin-top:-80px;
     margin-left:-80px;
}
.coffeeicon{
     position:absolute;
     top:50%;
     left:50%;
     margin-top:-20px;
     margin-left:-13px;
    


}


</style>

