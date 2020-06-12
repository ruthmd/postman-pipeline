create table ruthwik.postman.products1 as select sku, array_agg(array[name, description]) as name_description 
from postman.products group by 1;


ALTER TABLE ruthwik.postman.products1 add primary key (sku);


