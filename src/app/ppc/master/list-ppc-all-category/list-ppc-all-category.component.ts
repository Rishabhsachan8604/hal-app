import { Component, OnInit } from '@angular/core';
import { Utils } from 'src/app/utils';
declare var $:any;
@Component({
  selector: 'app-list-ppc-all-category',
  templateUrl: './list-ppc-all-category.component.html',
  styleUrls: ['./list-ppc-all-category.component.css']
})
export class ListPpcAllCategoryComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    $('.allcategorytable').html('');
    var allcategory='';
    var allcatsrno=1;
    var allcats=Utils.get_all_category('All');
    if(allcats.length>0){
      $.each(allcats, function(index, element) {
        allcategory+='<tr><td>'+allcatsrno+'</td>';
        allcategory+='<td>'+element.CAT_NAME+'</td>';
        allcategory+='<td>'+element.CAT_DESC+'</td>';
        allcategory+='<td>'+element.CAT_PARENT_NAME+'</td>';
        allcategory+='<td><div class="btn-group m-b-5 m-r-5 dropup">'+
                        '<a href="javascript:;" class="btn btn-primary"><i class="fa fa-cog"></i></</a>'+
                        '<a href="javascript:;" data-toggle="dropdown" class="btn btn-primary dropdown-toggle"></a>'+
                        '<ul class="dropdown-menu pull-right">'+
                            '<li><a href="javascript:;"  class="editcategorymodel" attr-id="'+element.CAT_ID+'" attr-name="'+element.CAT_NAME+'" attr-desc="'+element.CAT_DESC+'" attr-under="'+element.CAT_PARENT_ID+'">Edit</a></li>'+
                            '<li><a href="javascript:void(0);" class="deletecategory" attr-id="'+element.CAT_ID+'">Delete</a></li>'+
                        '</ul>'+
                    '</div>'+
                  '</td>';
                  allcategory+='</tr>';
        allcatsrno++;
      });
      $('.allcategorytable').html(allcategory);
      Utils.get_all_category('CAT_PARENT_ID');
    }
    Utils.intializedatatable();
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      //for delete category
      $('.deletecategory').on('click',function(){
        if(confirm("Are you sure want to delete")){
          var d=$(this);
          $.ajax({
            type: 'POST',
            url: Utils.delurl('ppc')+'delete_cat/'+$(this).attr('attr-id'),
            headers: {
            },
            beforeSend: function () {
              d.attr("disabled", "disabled");
              d.html("Please Wait...");
            },
            success: function (msg) {
              if(msg.status=="200"){
                Utils.notification('Success',"Deleted Successfully");
                location.reload();
              }else{
                d.attr("disabled", false);
                d.html("Delete");
                Utils.notification('Error',"Something Wents Wrong");
              }
            },
            error: function (msg) {
              d.attr("disabled", false);
              d.html("Delete");
              Utils.notification('Error',"Something wents wrong");
            }
          });
        }
      });
    });
    //for opening model category
    $('.editcategorymodel').on('click',function(){
      $('#editcategorymodel').modal('show');
      $('#editcategorymodel').find('input[name="CAT_ID"]').val($(this).attr('attr-id'));
      $('#editcategorymodel').find('input[name="CAT_NAME"]').val($(this).attr('attr-name'));
      $('#editcategorymodel').find('textarea[name="CAT_DESC"]').html($(this).attr('attr-desc'));
      $('#editcategorymodel').find('select[name="CAT_PARENT_ID"] option[value=""]').remove();
      $('#editcategorymodel').find('select[name="CAT_PARENT_ID"] option').attr('style','display:block;');
      if($(this).attr('attr-under')!=0){
        $('#editcategorymodel').find('select[name="CAT_PARENT_ID"] option[value="'+$(this).attr('attr-id')+'"]').attr('style','display:none;');
        $('#editcategorymodel').find('select[name="CAT_PARENT_ID"]').val($(this).attr('attr-under'));
      }else{
        $('#editcategorymodel').find('select[name="CAT_PARENT_ID"]').prepend('<option value="">Select Category</option>');
        $('#editcategorymodel').find('select[name="CAT_PARENT_ID"]').val('');
      }
    });
    //edit category 
    $('#editcategory').on('submit',function(e){
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: Utils.updateurl('ppc')+'edit_cat/'+$('#editcategory').find('input[name="CAT_ID"]').val(),
        data:$("#editcategory").serialize(),
        headers: {
        },
        beforeSend: function () {
          $('.editcategory').attr("disabled", "disabled");
          $('.editcategory').html("Please Wait...");
        },
        success: function (msg) {
          if(msg.status=="200"){
            $('.editcategory').attr("disabled", false);
            $('.editcategory').html("Save");
            $('#editcategory').trigger('reset');
            location.reload();
            Utils.notification('Success',"Category Updated Successfully");
          }else if(msg.status=="409"){
            $('.editcategory').attr("disabled", false);
            $('.editcategory').html("Save");
            $('#editcategory').trigger('reset');
            Utils.notification('Error',"Already Inserted");
          }else{
            $('.editcategory').attr("disabled", false);
            $('.editcategory').html("Save");
            Utils.notification('Error',"Something Wents Wrong");
          }
        },
        error: function (msg) {
          $('.editcategory').attr("disabled", false);
          $('.editcategory').html("Save");
          $('#editcategory').trigger('reset');
          Utils.notification('Error',"Something wents wrong");
        }
      });
    });
  }
}
