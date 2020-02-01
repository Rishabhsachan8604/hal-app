import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;

@Component({
  selector: 'app-ppc-add-stock-item',
  templateUrl: './ppc-add-stock-item.component.html',
  styleUrls: ['./ppc-add-stock-item.component.css']
})
export class PpcAddStockItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Utils.get_all_groups("GROUP_ID");
    Utils.get_all_category("CAT_ID");
    Utils.get_all_units("UNIT_ID");
    Utils.get_all_brands("BRAND_ID");
    Utils.get_all_size("SIZE_ID");
    $('#addstockitem').parsley();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      $('#addstockitem').on('submit',function(e){
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url: Utils.posturl('ppc')+'insert_stockitem',
          data:$("#addstockitem").serialize(),
          headers: {
          },
          beforeSend: function () {
            $('.addstockitem').attr("disabled", "disabled");
            $('.addstockitem').html("Please Wait...");
          },
          success: function (msg) {
            if(msg.status=="200"){
              $('.addstockitem').attr("disabled", false);
              $('.addstockitem').html("Save");
              $('#addstockitem').trigger('reset');
              Utils.notification('Success',"Stock item added successfully");
            }else if(msg.status=="409"){
              $('.addstockitem').attr("disabled", false);
              $('.addstockitem').html("Save");
              $('#addstockitem').trigger('reset');
              Utils.notification('Success',"Already Inserted");
            }
            else{
              $('.addstockitem').attr("disabled", false);
              $('.addstockitem').html("Save");
              Utils.notification('Success',"Something Wents Wrong");
            }
          },
          error: function (msg) {
            $('.addstockitem').attr("disabled", false);
            $('.addstockitem').html("Save");
            $('#addstockitem').trigger('reset');
            Utils.notification('Error',"Something wents wrong");
          }
        });
      });
    });
  }

}
