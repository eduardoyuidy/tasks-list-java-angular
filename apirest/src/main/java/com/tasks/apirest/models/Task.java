package com.tasks.apirest.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_TASK")
public class Task implements Serializable {

	private static final long serialVersionUID = 1L;
	
	/** ID Gerado de forma automática incremental **/
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;	
	
	private String title;
	
	private Boolean done;
	
	private String description;
	
	private String dateInc;
	
	private String dateEdit;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Boolean getDone() {
		return done;
	}

	public void setDone(Boolean done) {
		this.done = done;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDateInc() {
		return dateInc;
	}

	public void setDateInc(String dateInc) {
		this.dateInc = dateInc;
	}

	public String getDateEdit() {
		return dateEdit;
	}

	public void setDateEdit(String dateEdit) {
		this.dateEdit = dateEdit;
	}	
}
