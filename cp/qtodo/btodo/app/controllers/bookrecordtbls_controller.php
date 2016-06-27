<?php 
class BookrecordtblsController extends AppController{
	var $name='Bookrecordtbls';
	var $helpers = array('Html', 'Form');
	
	var $paginate = array(
              'limit' => 20,
              'order' => array(
                'Bookrecordtbl.date_of_book_issue' => 'desc'
                )
              );     
	
	
	function index()
	{
		$data = $this->paginate('Bookrecordtbl');
        $this->set('book', $data);
		//$this->set('book', $this->Bookrecordtbl->find('all'));
	}
	
	
	function searchexp($id=NULL)
	{
		$rel = $this->Bookrecordtbl->find('all',
										array(
								'conditions' => array('Bookrecordtbl.id' => $id),
								'limit'=>2
											)
										);
		$this->set('book', $rel);
	}
	
	
	
	function edit($id = null) {
				if (!$id) {
				$this->Session->setFlash('Invalid Operation');
				$this->redirect(array('action'=>'index'), null, true);
						}
				if (empty($this->data)) {
				$this->data = $this->Bookrecordtbl->find(array('id' => $id));
				} else {
				if ($this->Bookrecordtbl->save($this->data)) {
				$this->Session->setFlash('The ---- has been saved');
				$this->redirect(array('action'=>'index'), null, true);
				} else {
				$this->Session->setFlash('The ---- could not be saved.Please, try again.');
						}
					}
				}			
	
	function delete($id = null) {
				if (!$id) {
				$this->Session->setFlash('Invalid id for ------');
				$this->redirect(array('action'=>'index'), null, true);
						}
				if ($this->Bookrecordtbl->del($id)) {
				$this->Session->setFlash('Issue #'.$id.' deleted');
				$this->redirect(array('action'=>'index'), null, true);
						}
					}

}//class brace
?>