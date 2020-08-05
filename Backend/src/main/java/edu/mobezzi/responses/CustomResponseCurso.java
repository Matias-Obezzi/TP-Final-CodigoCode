package edu.mobezzi.responses;

import edu.mobezzi.dao.CursoDTO;

public class CustomResponseCurso implements CustomResponse<Response<CursoDTO>> {

	private Response<CursoDTO> response;
	
	public CustomResponseCurso(boolean error, String message, CursoDTO curso) {
		this.response =  new Response<CursoDTO>(error, message, curso);
	}
	
	@Override
	public Response<CursoDTO> getResponse() {
		return this.response;
	}
	
}
